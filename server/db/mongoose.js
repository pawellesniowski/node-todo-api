var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<pawel>:<matrix>@ds155582.mlab.com:55582/mlab2');

module.exports = {mongoose};