"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var nanoid_1 = require("nanoid");
var EventSchema = new mongoose_1["default"].Schema({
    eventId: {
        type: String,
        required: true,
        unique: true,
        "default": function () { return (0, nanoid_1.nanoid)(10); }
    },
    name: { type: String, "default": true },
    position: { type: String, "default": true },
    recommendation: { type: String, "default": true },
    picture: { type: , "default": true },
    skills_interest: { type: Array },
    proficient: { type: Array },
    technologies: { type: Array },
    related_experience: { type: Array }
}, { timestamps: true, versionKey: false });
var Developer = mongoose_1["default"].model("Developer", EventSchema);
exports["default"] = Developer;
