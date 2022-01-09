import * as mongoose from "mongoose";
import { nanoid } from "nanoid";

export type experience = {
  position: string;
  duration: string;
  company: string;
};

export interface DeveloperDocument extends mongoose.Document {
  name: string;
  position: string;
  picture: string;
  recommendation: string;
  createdAt: Date;
  updatedAt: Date;
  skills_interest: Array<string>;
  proficient?: Array<string>;
  technologies?: Array<string>;
  related_experience?: Array<experience>;
}

const EventSchema = new mongoose.Schema(
  {
    eventId: {
      type: String,
      required: true,
      unique: true,
      default: () => nanoid(10),
    },
    name: { type: String, default: true },
    position: { type: String, default: true },
    recommendation: { type: String, default: true },
    picture: { type: String, default: true },
    skills_interest: { type: Array },
    proficient: { type: Array },
    technologies: { type: Array },
    related_experience: { type: Array },
  },
  { timestamps: true, versionKey: false }
);

const Developer = mongoose.model<DeveloperDocument>("Developer", EventSchema);

export default Developer;
