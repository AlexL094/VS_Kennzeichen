import mongoose from "mongoose";

const bewertungSchema = new mongoose.Schema({
  kennzeichen: String,
  spurhaltung: Number,
  verhalten: Number,
  anmerkungen: String,
  authorVonBewertung: String,

});
export const Bewertung = mongoose.model("Bewertung", bewertungSchema);