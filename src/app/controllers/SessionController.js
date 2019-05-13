class SessionController {
  async store(req, res) {
    console.log('teste')
    return res.status(200).send();
  }
}

module.exports = new SessionController();