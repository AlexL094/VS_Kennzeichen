import { check, validationResult } from "express-validator";
import { Bewertung } from "../models/bewertungModel.js";


// Return of all Bewertungs
export const getBewertung = async (req, res) => {
  // allow frontend to access this call
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const bewertung = await Bewertung.find();
  res.status(200).send(bewertung);
};

// Return a Bewertung by id

export const getBewertungById = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let bewertung = await Bewertung.findById(req.params.id);
    res.status(200).send(bewertung);
  }
};

// Return a Bewertung by kennzeichen

export const getBewertungByKennzeichen = async (req, res) => {
  let result = await Bewertung.find({ kennzeichen: req.query.kennzeichen });
  res.status(200).send(result);
};

// Add a Bewertung

export const addBewertung = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const bewertung = new Bewertung({
    kennzeichen: req.body.kennzeichen,
    spurhaltung: req.body.spurhaltung,
    verhalten: req.body.verhalten,
    anmerkungen: req.body.anmerkungen,
    authorVonBewertung: req.body.authorVonBewertung,
  });
  bewertung.save(bewertung).then((bewertung) => res.status(201).send(bewertung));
};

// Delete a Bewertung by id

export const deleteBewertung = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let bewertung = await Bewertung.findById(req.params.id);
    if(bewertung != null ){
        await Bewertung.deleteOne({ id: req.params.id }).
          then(res.status(200).
            send('Deleted successful')
        );
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Put a Bewertung by id

export const putBewertung = async (req, res) => {

  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const bewertung = await Bewertung.findById(req.params.id);
    if(bewertung != null){
      let newPutBewertung = new Bewertung({
        kennzeichen: req.body.kennzeichen,
        spurhaltung: req.body.spurhaltung,
        verhalten: req.body.verhalten,
        anmerkungen: req.body.anmerkungen,
        authorVonBewertung: req.body.authorVonBewertung,
      });
      await Bewertung.replaceOne(
        {
          id: req.params.id,
        },
        {
          id: req.params.id,
          kennzeichen: req.body.kennzeichen,
          spurhaltung: req.body.spurhaltung,
          verhalten: req.body.verhalten,
          anmerkungen: req.body.anmerkungen,
          authorVonBewertung: req.body.authorVonBewertung,
        }
      );
      res.status(200).send(newPutBewertung);
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Validators for Body

export const putBewertungValidators = [
  check("kennzeichen").notEmpty().withMessage("kennzeichen field required"),
  check("anmerkungen").notEmpty().withMessage("anmerkungen field required"),
  check("spurhaltung").notEmpty().withMessage("Spurhaltung field required"),
  check("verhalten").notEmpty().withMessage("verhalten field verhalten required"),
  check("authorVonBewertung").notEmpty().withMessage("authorVonBewertung field required"),

  check("kennzeichen").isString().withMessage("kennzeichen must be a String required"),
  check("anmerkungen").isString().withMessage("anmerkungen must be a String required"),
  check("authorVonBewertung").notEmpty().withMessage("authorVonBewertung must be a String required"),

  check("kennzeichen").isLength({min:1}).withMessage("Minimum Length kennzeichen did not match"),
  check("anmerkungen").isLength({min:1}).withMessage("Minimum Length anmerkungen did not match"),

  check("kennzeichen").isLength({max:11}).withMessage("Maximum Length kennzeichen did not match"),

];

export const newBewertungValidators = [
  check("kennzeichen").notEmpty().withMessage("kennzeichen field required"),
  check("anmerkungen").notEmpty().withMessage("anmerkungen field required"),
  check("spurhaltung").notEmpty().withMessage("Spurhaltung field required"),
  check("verhalten").notEmpty().withMessage("verhalten field verhalten required"),
  check("authorVonBewertung").notEmpty().withMessage("authorVonBewertung field required"),

  check("kennzeichen").isString().withMessage("kennzeichen must be a String required"),
  check("anmerkungen").isString().withMessage("anmerkungen must be a String required"),
  check("authorVonBewertung").notEmpty().withMessage("authorVonBewertung must be a String required"),

  check("kennzeichen").isLength({min:1}).withMessage("Minimum Length kennzeichen did not match"),
  check("anmerkungen").isLength({min:1}).withMessage("Minimum Length anmerkungen did not match"),

  check("kennzeichen").isLength({max:11}).withMessage("Maximum Length kennzeichen did not match"),
];