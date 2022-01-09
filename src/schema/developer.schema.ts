import { object, string } from "yup";

const payload = {
  body: object({
    name: string().required("Name is required"),
    picture: string().required("picture is required"),
    position: string()
      .required("position is required")
      .min(10, "position is too short - should be 10 chars minimum."),
    recommendation: string().required("expected Weather is required"),
  }),
};

const updatePayload = {
  body: object({
    name: string(),
    picture: string(),
    position: string(),
  }),
};

const params = {
  params: object({
    eventId: string().required("eventId is required"),
  }),
};

export const createDeveloperSchema = object({
  ...payload,
});

export const updateDeveloperSchema = object({
  ...params,
  ...updatePayload,
});

export const deleteDeveloperSchema = object({
  ...params,
});
