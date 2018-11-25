const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define module
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});

//Create model class
const ModelClass = mongoose.model('user',userSchema);
//export


module.exports = ModelClass;
