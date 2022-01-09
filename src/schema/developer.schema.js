"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.deleteDeveloperSchema = exports.updateDeveloperSchema = exports.createDeveloperSchema = void 0;
var yup_1 = require("yup");
var payload = {
    body: (0, yup_1.object)({
        name: (0, yup_1.string)().required("Name is required"),
        picture: (0, yup_1.string)().required("picture is required"),
        position: (0, yup_1.string)()
            .required("position is required")
            .min(10, "position is too short - should be 10 chars minimum."),
        recommendation: (0, yup_1.string)().required("expected Weather is required")
    })
};
var updatePayload = {
    body: (0, yup_1.object)({
        name: (0, yup_1.string)(),
        picture: (0, yup_1.string)(),
        position: (0, yup_1.string)()
    })
};
var params = {
    params: (0, yup_1.object)({
        eventId: (0, yup_1.string)().required("eventId is required")
    })
};
exports.createDeveloperSchema = (0, yup_1.object)(__assign({}, payload));
exports.updateDeveloperSchema = (0, yup_1.object)(__assign(__assign({}, params), updatePayload));
exports.deleteDeveloperSchema = (0, yup_1.object)(__assign({}, params));
