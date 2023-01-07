const mongoose = require("mongoose");

//these options set to remove all warnings, see depreciation docs
// // mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
mongoose.set('strictQuery', true);

const connectDB = (url) => {
  return mongoose.connect(url);
};
module.exports = connectDB;