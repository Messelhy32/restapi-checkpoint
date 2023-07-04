var userModel = require("../models/User");

exports.GetAllUsers = function (req, res, next) {
  userModel.find({}).then((data) => {
    console.log(data);
    res.json(data);
  });
};

exports.AddNewUser = function (req, res, next) {
  userModel.create(req.body).then(() => {
    console.log("Name Added: " + req.body.name);
    res.end(req.body.name);
  });
};
exports.UpdateUser = function (req, res, next) {
  userModel
    .findByIdAndUpdate("64a3d82b41b86895f3909787", { name: req.body.name })
    .then(() => {
      console.log("Name Updated!");
      res.end(req.body.name);
    });
};

exports.DeleteUser = function (req, res, next) {
  userModel.findByIdAndDelete("64a3d7c3ae7179fb558023a3").then(() => {
    console.log("Name Deleted!");
    res.end("Name Deleted!");
  });
};
