const greyWolf = require('./GreyWolf');

module.exports = class {
  mount(app) {
    app.use('/grey-wolf', greyWolf);
  }
};
