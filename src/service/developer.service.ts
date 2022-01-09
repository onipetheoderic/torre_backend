import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Developer, { DeveloperDocument } from "../model/developer.model";

export function createDeveloper(input: DocumentDefinition<DeveloperDocument>) {
  return Developer.create(input);
}

export function searchDeveloper(query: FilterQuery<DeveloperDocument>) {}

export function findDeveloper(
  query: FilterQuery<DeveloperDocument>,
  options: QueryOptions = { lean: true }
) {
  return Developer.findOne(query, {}, options);
}

export function getDevelopers() {
  return Developer.find({}).select("-__v");
}

export function findAndUpdate(
  query: FilterQuery<DeveloperDocument>,
  update: UpdateQuery<DeveloperDocument>,
  options: QueryOptions
) {
  console.log(query, "the query", update, "the update");
  return Developer.findOneAndUpdate(query, update, options);
}

export function deleteDeveloper(query: FilterQuery<DeveloperDocument>) {
  return Developer.deleteOne(query);
}
