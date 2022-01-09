"use strict";
exports.__esModule = true;
exports.deleteDeveloper = exports.findAndUpdate = exports.getDevelopers = exports.findDeveloper = exports.searchDeveloper = exports.createDeveloper = void 0;
var developer_model_1 = require("../model/developer.model");
function createDeveloper(input) {
    return developer_model_1["default"].create(input);
}
exports.createDeveloper = createDeveloper;
function searchDeveloper(query) { }
exports.searchDeveloper = searchDeveloper;
function findDeveloper(query, options) {
    if (options === void 0) { options = { lean: true }; }
    return developer_model_1["default"].findOne(query, {}, options);
}
exports.findDeveloper = findDeveloper;
function getDevelopers() {
    return developer_model_1["default"].find({}).select("-__v");
}
exports.getDevelopers = getDevelopers;
function findAndUpdate(query, update, options) {
    console.log(query, "the query", update, "the update");
    return developer_model_1["default"].findOneAndUpdate(query, update, options);
}
exports.findAndUpdate = findAndUpdate;
function deleteDeveloper(query) {
    return developer_model_1["default"].deleteOne(query);
}
exports.deleteDeveloper = deleteDeveloper;
