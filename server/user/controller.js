const User = require('./model');
const { hash, compareHash } = require('../lib/util');
const { createToken, findUserByToken } = require('../lib/auth');

const cookieIsSecure = process.env.ENVIRONMENT === 'production';

exports.findAll = async (req, res) => {
  User.find()
    .populate('interests')
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOne = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate('interests')
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = async (req, res) => {
  console.log('creating')
  const password = await hash(req.body.password);
  const rawUser = {
    ...req.body,
    password,
    // location: req.body.location ? req.body.location.toLowerCase() : null
  };
  User.create(rawUser)
    .then(async user => {
      user.accountConfirmationToken = await createToken(user, '1 hour');
      return user.save();
    })
    .then(async user => {
      const newUser = user.toObject();
      delete newUser.password;
      delete newUser.accountConfirmationToken;
      res.send(newUser);
    })
    .catch(err => {
      if (err.code === 11000) {
        res.status(400).send({ message: 'A user with this email address has already registered.' });
        return;
      }
      res.status(500).send({ message: 'An unexpected error occurred' });
    });
};

exports.authenticate = (req, res) => res.status(200).send(req.user);
exports.logout = (req, res) =>
  res
    .status(204)
    .clearCookie('jwt')
    .send();

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const rawUser = await User.findOne({ email })
      .populate('interests')
      .select('+password')
      .select('+firstLogin');
    if (!rawUser) throw new Error('Incorrect username or password');

    const passwordIsCorrect = await compareHash(password, rawUser.password);
    if (!passwordIsCorrect) throw new Error('Incorrect username or password');

    const user = rawUser.toObject();
    delete user.password;
    const token = createToken(user);
    return res
      .status(200)
      .cookie('jwt', token, { httpOnly: true, secure: cookieIsSecure })
      .send(user);
  } catch (error) {
    if (!error.message)
      return res.status(500).send({ message: 'An unexpected error occurred during login' });
    return res.status(401).send({ message: error.message });
  }
};

const requestPasswordReset = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  // "accept" the password reset request even if the email isn't tied to a registered user account
  // https://ux.stackexchange.com/questions/87079/reset-password-appropriate-response-if-email-doesnt-exist
  if (!user) return res.status(202).send();

  const token = await createToken(user, '1 hour');
  user.passwordResetToken = token;
  return user
    .save()
    .then(() => sendPasswordResetEmail(user.email, token))
    .then(() => res.status(202).send())
    .catch(mailError => console.log(mailError));
};

const completePasswordReset = async (req, res) => {
  const { token, password } = req.body;

  const user = await findUserByToken(token);
  if (!user) return res.status(401).send({ message: 'Invalid token' });
  if (!user.passwordResetToken)
    res.status(403).send({ message: 'User did not request password reset' });

  user.password = await hash(password);
  user.passwordResetToken = null;
  await user.save();

  return res.status(204).send({ message: 'New password set successfully' });
};

exports.resetPassword = (req, res) => {
  const { token } = req.body;
  if (!token) return requestPasswordReset(req, res);
  return completePasswordReset(req, res);
};

exports.confirmAccount = async (req, res) => {
  const { token } = req.body;

  const user = await findUserByToken(token);
  if (!user) return res.status(401).send({ message: 'Invalid token' });

  user.accountConfirmationToken = null;
  user.pending = false;
  return user.save().then(() => res.status(204).send());
};
