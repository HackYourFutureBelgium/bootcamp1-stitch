class APIClient {
  login(email, password) {
    return Promise.resolve({
      name: 'logged in user',
      email
    });
  }
}

export default new APIClient();
