import mongoose from "mongoose";

function connect() {
  const dbUri = "mongodb://localhost:27017/rest-api";

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch(error => {
      console.log("db error", error);
      process.exit(1);
    });
}

export default connect;
