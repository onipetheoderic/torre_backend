import { Request, Response } from "express";
import { get } from "lodash";
import {
  createDeveloper,
  findDeveloper,
  findAndUpdate,
  deleteDeveloper,
  getDevelopers,
  searchDeveloper,
} from "../service/developer.service";
/*
-  https://torre.bio/api/bios/$username DONE

-  https://torre.co/api/suite/opportunities/$id DONE

-  POST https://search.torre.co/opportunities/_search/?

-  POST https://search.torre.co/people/_search/? (searches for jobs and people in general)
*/
export async function createDeveloperHandler(req: Request, res: Response) {
  const body = req.body;
  const event = await createDeveloper({ ...body });
  return res.send(event);
}

export async function searchDeveloperHandler(req: Request, res: Response) {
  const body = req.body;
  const event = await searchDeveloper({ ...body });
  return res.send(event);
}

export async function updateDeveloperHandler(req: Request, res: Response) {
  const eventId = get(req, "params.eventId");
  const update = req.body;

  const event = await findDeveloper({ eventId });
  if (!event) {
    return res.sendStatus(404);
  }
  const updatedEvent = await findAndUpdate({ eventId }, update, { new: true });
  return res.send(updatedEvent);
}

export async function getDeveloperHandler(req: Request, res: Response) {
  const eventId = get(req, "params.developerId");
  const event = await findDeveloper({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }
  return res.send(event);
}

export async function getAllDeveloperHandler(req: Request, res: Response) {
  const events = await getDevelopers();
  return res.send(events);
}

export async function deleteDeveloperHandler(req: Request, res: Response) {
  const eventId = get(req, "params.eventId");

  const event = await findDeveloper({ eventId });

  if (!event) {
    return res.sendStatus(404);
  }
  await deleteDeveloper({ eventId });
  return res.status(200).json({ message: "delete successfully" });
}
