const grocery = require('./grocery/grocery.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(grocery);
};