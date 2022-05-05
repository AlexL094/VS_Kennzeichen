import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";

import bewertungRoutes from "./routes/bewertungRoutes.js";
import ortskennungRoutes from "./routes/ortskennungRouter.js";
import tuevRoutes from "./routes/tuevRouter.js";
import databaseRoutes from "./routes/databaseRouter.js";
import swaggerDocs from "../swaggerDocs.js";


// complete application is here
const app = express();
const port = 4000;
// app uses json
app.use(bodyParser.json());

// Die Routes zum den Nodes 
app.use("/bewertung", bewertungRoutes);
app.use("/ortskennung", ortskennungRoutes);
app.use("/tuev", tuevRoutes);
app.use("/database", databaseRoutes);

//For swagger
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// everything else throws a 404
app.all("*", (req, res) => res.sendStatus(404));

// connect to database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});