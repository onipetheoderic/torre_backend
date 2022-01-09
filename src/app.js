"use strict";
exports.__esModule = true;
var express_1 = require("express");
var config = require("config");
var logger_1 = require("./logger");
var connect_1 = require("./db/connect");
var routes_1 = require("./routes");
var port = config.get("port");
var host = config.get("host");
var app = (0, express_1["default"])();
//Setup Cross origin
app.use(require("cors")({
    // origin: ["http://localhost:3000"],
    origin: "*"
}));
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: false }));
app.listen(port, host, function () {
    logger_1["default"].info("Server listing at http://" + host + ":" + port);
    (0, connect_1["default"])();
    (0, routes_1["default"])(app);
});
