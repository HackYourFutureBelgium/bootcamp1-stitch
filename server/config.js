process.env.MONGODB_URL = "mongodb+srv://nihan:qwerty123@cluster0-nvgfv.gcp.mongodb.net/test?retryWrites=true&w=majority";
process.env.PORT = 4000;

console.log(`
configging -->
  MONGODB_URL: ${process.env.MONGODB_URL}
  PORT: ${process.env.PORT}
`);
