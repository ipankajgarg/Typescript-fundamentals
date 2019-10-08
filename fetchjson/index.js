"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/users/1";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    console.log(todo);
});
