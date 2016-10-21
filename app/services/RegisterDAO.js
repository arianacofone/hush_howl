const db = require('../config/db');
const sql = require('../config/sqlProvider');
// .registrations;
// const Registration = require('../models/Registration');

class RegisterDAO {
  static create({ name, email }) {
    return db.one(sql.create, [name, email]);
            //  .then((row) => new Registration(row));
  }
}

module.exports = RegisterDAO;
