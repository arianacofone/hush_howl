const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  // registrations: {
  create: sql('./sql/registration/create.sql'),
  // },
};

module.exports = sqlProvider;
