const hello = require('./Hello');

module.exports = class {
  mount(app) {
    app.use('/', hello);
  }
};
