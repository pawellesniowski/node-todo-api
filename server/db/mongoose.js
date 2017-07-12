var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<pawellesniowski>:<Matrix0019M>@ds155582.mlab.com:55582/mlab2');

module.exports = {mongoose};