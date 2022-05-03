import mongoose from "mongoose";

const ortskennungSchema = new mongoose.Schema({
  ortskürzel: String,
  landkreis: String,
  bundesland: String,

});
export const Ortskennung = mongoose.model("ortskennung", ortskennungSchema);