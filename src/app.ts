import express from "express";
import connect from "./db/connect";
import routes from "./routes";

const port = 3200;
const host = "0.0.0.0";
const dbUri = "mongodb://localhost:27017/rest-api";

const app = express();

//Setup Cross origin
app.use(
  require("cors")({
    // origin: ["http://localhost:3000"],
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  console.log(`Server listing at http://${host}:${port}`);

  connect();

  routes(app);
});
