import mongoose from "mongoose";

const tuevSchema = new mongoose.Schema({
  kennzeichen: String,
  ort: String,
  pruefer: String,
  gueltigBis: String,
  letztePrüfung: String,

});
export const Tuev = mongoose.model("tuev", tuevSchema);