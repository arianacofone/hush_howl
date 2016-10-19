const RegisterDAO = require('../services/RegisterDAO');

class RegisterController {
  static create(req, res) {
    const fanData = {
      name: req.body.name,
      email: req.body.email,
    };
    RegisterDAO.create(fanData)
               .then((fan) => res.status(200).json(fan));
  }
}

module.exports = RegisterController;
