const greyWolf = require('./GreyWolf');
const batGang = require('./BatGang');

module.exports = class {
  mount(app) {
    app.use('/grey-wolf', greyWolf);
    app.use('/bat-gang', batGang);
  }
};
