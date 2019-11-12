class APIClient {
  login(email, password) {
    return Promise.resolve({
      name: 'Alfi',
      email
    });
  }
}

export default new APIClient();
