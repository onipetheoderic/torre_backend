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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteDeveloperHandler = exports.getAllDeveloperHandler = exports.getDeveloperHandler = exports.updateDeveloperHandler = exports.searchDeveloperHandler = exports.createDeveloperHandler = void 0;
var lodash_1 = require("lodash");
var developer_service_1 = require("../service/developer.service");
/*
-  https://torre.bio/api/bios/$username DONE

-  https://torre.co/api/suite/opportunities/$id DONE

-  POST https://search.torre.co/opportunities/_search/?

-  POST https://search.torre.co/people/_search/? (searches for jobs and people in general)
*/
function createDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = req.body;
                    return [4 /*yield*/, (0, developer_service_1.createDeveloper)(__assign({}, body))];
                case 1:
                    event = _a.sent();
                    return [2 /*return*/, res.send(event)];
            }
        });
    });
}
exports.createDeveloperHandler = createDeveloperHandler;
function searchDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var body, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = req.body;
                    return [4 /*yield*/, (0, developer_service_1.searchDeveloper)(__assign({}, body))];
                case 1:
                    event = _a.sent();
                    return [2 /*return*/, res.send(event)];
            }
        });
    });
}
exports.searchDeveloperHandler = searchDeveloperHandler;
function updateDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var eventId, update, event, updatedEvent;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventId = (0, lodash_1.get)(req, "params.eventId");
                    update = req.body;
                    return [4 /*yield*/, (0, developer_service_1.findDeveloper)({ eventId: eventId })];
                case 1:
                    event = _a.sent();
                    if (!event) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [4 /*yield*/, (0, developer_service_1.findAndUpdate)({ eventId: eventId }, update, { "new": true })];
                case 2:
                    updatedEvent = _a.sent();
                    return [2 /*return*/, res.send(updatedEvent)];
            }
        });
    });
}
exports.updateDeveloperHandler = updateDeveloperHandler;
function getDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var eventId, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventId = (0, lodash_1.get)(req, "params.developerId");
                    return [4 /*yield*/, (0, developer_service_1.findDeveloper)({ eventId: eventId })];
                case 1:
                    event = _a.sent();
                    if (!event) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [2 /*return*/, res.send(event)];
            }
        });
    });
}
exports.getDeveloperHandler = getDeveloperHandler;
function getAllDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var events;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, developer_service_1.getDevelopers)()];
                case 1:
                    events = _a.sent();
                    return [2 /*return*/, res.send(events)];
            }
        });
    });
}
exports.getAllDeveloperHandler = getAllDeveloperHandler;
function deleteDeveloperHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var eventId, event;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    eventId = (0, lodash_1.get)(req, "params.eventId");
                    return [4 /*yield*/, (0, developer_service_1.findDeveloper)({ eventId: eventId })];
                case 1:
                    event = _a.sent();
                    if (!event) {
                        return [2 /*return*/, res.sendStatus(404)];
                    }
                    return [4 /*yield*/, (0, developer_service_1.deleteDeveloper)({ eventId: eventId })];
                case 2:
                    _a.sent();
                    return [2 /*return*/, res.status(200).json({ message: "delete successfully" })];
            }
        });
    });
}
exports.deleteDeveloperHandler = deleteDeveloperHandler;
