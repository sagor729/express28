var mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/expressdb');
mongoose.connect('mongodb+srv://express123:2WZE4LmA4l6V753C@cluster0.uxuqhmc.mongodb.net/expressdb');

//  mongoose.connect('mongodb+srv://express22:t4UUHeKSRCxCjqJW@cluster0.tlpi11b.mongodb.net/?retryWrites=true&w=majority')

var mongoosedb = module.exports = mongoose;