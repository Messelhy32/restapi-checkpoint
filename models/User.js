var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    length: 8,
    required: true,
  },
});
var UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
