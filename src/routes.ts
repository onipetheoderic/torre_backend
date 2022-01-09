import { Express, Request, Response } from "express";
import {
  createDeveloperHandler,
  updateDeveloperHandler,
  getDeveloperHandler,
  deleteDeveloperHandler,
  getAllDeveloperHandler,
} from "./controller/developer.controller";

import { validateRequest } from "./middleware";

import {
  createDeveloperSchema,
  updateDeveloperSchema,
  deleteDeveloperSchema,
} from "./schema/developer.schema";

export default function (app: Express) {
  app.get("/api/healthcheck", (req: Request, res: Response) =>
    res.sendStatus(200)
  );

  // Get a developer
  app.get("/api/developer/:developerId", getDeveloperHandler);

  app.get("/api/developers", getAllDeveloperHandler);

  // Create a developer
  app.post(
    "/api/developers",
    [validateRequest(createDeveloperSchema)],
    createDeveloperHandler
  );

  // Update a developer
  app.put(
    "/api/developers/:developerId",
    [validateRequest(updateDeveloperSchema)],
    updateDeveloperHandler
  );

  // Delete a developer
  app.delete(
    "/api/developers/:developerId",
    [validateRequest(deleteDeveloperSchema)],
    deleteDeveloperHandler
  );
}
