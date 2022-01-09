"use strict";
exports.__esModule = true;
var developer_controller_1 = require("./controller/developer.controller");
var middleware_1 = require("./middleware");
var developer_schema_1 = require("./schema/developer.schema");
function default_1(app) {
    app.get("/api/healthcheck", function (req, res) {
        return res.sendStatus(200);
    });
    // Get a developer
    app.get("/api/developer/:developerId", developer_controller_1.getDeveloperHandler);
    app.get("/api/developers", developer_controller_1.getAllDeveloperHandler);
    // Create a developer
    app.post("/api/developers", [(0, middleware_1.validateRequest)(developer_schema_1.createDeveloperSchema)], developer_controller_1.createDeveloperHandler);
    // Update a developer
    app.put("/api/developers/:developerId", [(0, middleware_1.validateRequest)(developer_schema_1.updateDeveloperSchema)], developer_controller_1.updateDeveloperHandler);
    // Delete a developer
    app["delete"]("/api/developers/:developerId", [(0, middleware_1.validateRequest)(developer_schema_1.deleteDeveloperSchema)], developer_controller_1.deleteDeveloperHandler);
}
exports["default"] = default_1;
