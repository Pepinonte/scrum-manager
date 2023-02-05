"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
var app = (0, _express["default"])();

// app.use(indexRoutes);

app.listen(3001, function () {
  console.log("server on port 3001");
});