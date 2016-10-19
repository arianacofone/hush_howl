const db = require('../config/db');
const sql = require('../config/sqlProvider');
const Fan = require('../models/Fan');

class RegisterDAO {
  static create({ body }) {
    return db.one(sql.create, [body])
             .then((data) => new Fan(data));
  }
}

module.exports = RegisterDAO;
