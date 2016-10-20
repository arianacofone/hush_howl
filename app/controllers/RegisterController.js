const RegisterDAO = require('../services/RegisterDAO');

class RegisterController {
  static create(req, res) {
    const registrationData = {
      name: req.body.name,
      email: req.body.email,
    };
    RegisterDAO.create(registrationData)
               .then((data) => res.status(200).json(data))
               .catch(err => res.send(err));
  }
}

module.exports = RegisterController;
