import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import bewertungRoutes from "./routes/bewertungRoutes.js";
import ortskennungRoutes from "./routes/ortskennungRouter.js";
import tuevRoutes from "./routes/tuevRouter.js";



// complete application is here
const app = express();
const port = 4000;

// app uses json
app.use(bodyParser.json());

// only book routes and documentation is valid
// everything else throws a 404
app.use("/bewertung", bewertungRoutes);
app.use("/ortskennung", ortskennungRoutes);
app.use("/tuev", tuevRoutes);




app.all("*", (req, res) => res.sendStatus(404));

// connect to database
mongoose.connect("mongodb://mongo:27017/test").then(() => {
  console.log("Database connected");
});

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`);
});
