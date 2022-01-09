import * as mongoose from "mongoose";
import { connect, ConnectOptions } from "mongoose";

function connector() {
  const dbUri = "mongodb://localhost:27017/rest-api";

  return connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
    .then(() => {
      console.log("Database connected");
    })
    .catch(error => {
      console.log("db error", error);
      process.exit(1);
    });
}

export default connector;
