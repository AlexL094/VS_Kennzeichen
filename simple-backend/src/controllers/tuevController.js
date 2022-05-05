import { check, validationResult } from "express-validator";
import { Tuev } from "../models/tuevModal.js";


// Return of all Tuevs
export const getTuev = async (req, res) => {
  // allow frontend to access this call
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const tuev = await Tuev.find();
  res.status(200).send(tuev);
};

// Return a Tuev by id

export const getTuevById = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let tuev = await Tuev.findById(req.params.id);
    res.status(200).send(tuev);
  }
};

// Return a Tuev by kennzeichen

export const getTuevByKennzeichen = async (req, res) => {
  let result = await Tuev.find({ kennzeichen: req.query.kennzeichen });
  res.status(200).send(result);
};

// Add a Tuev


export const addTuev = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const tuev = new Tuev({
    kennzeichen: req.body.kennzeichen,
    ort: req.body.ort,
    pruefer: req.body.pruefer,
    gueltigBis: req.body.gueltigBis,
    letztePrüfung: req.body.letztePrüfung,
  });
  tuev.save(tuev).then((tuev) => res.status(201).send(tuev));
};

// Delete a Tuev by id

export const deleteTuev = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let tuev = await Tuev.findById(req.params.id);
    if(tuev != null ){
        await Tuev.deleteOne({ id: req.params.id });
        res.status(200).send('Deleted successful');
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Put a Tuev by id

export const putTuev = async (req, res) => {

  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    const tuev = await Tuev.findById(req.params.id);
    if(tuev != null){
      let newPutTuev = new Tuev({
        kennzeichen: req.body.kennzeichen,
        ort: req.body.ort,
        pruefer: req.body.pruefer,
        gueltigBis: req.body.gueltigBis,
        letztePrüfung: req.body.letztePrüfung,
      });
      await Tuev.replaceOne(
        {
          id: req.params.id,
        },
        {
          id: req.params.id,
          kennzeichen: req.body.kennzeichen,
          ort: req.body.ort,
          pruefer: req.body.pruefer,
          gueltigBis: req.body.gueltigBis,
          letztePrüfung: req.body.letztePrüfung,
        }
      );
      res.status(200).send(newPutTuev);
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Validators for Body

export const putTuevValidators = [
  check("kennzeichen").notEmpty().withMessage("kennzeichen field required"),
  check("ort").notEmpty().withMessage("ort field required"),
  check("pruefer").notEmpty().withMessage("pruefer field required"),
  check("gueltigBis").notEmpty().withMessage("gueltigBis field verhalten"),
  check("letztePrüfung").notEmpty().withMessage("letztePrüfung field required"),

  check("kennzeichen").isString().withMessage("kennzeichen field required"),
  check("ort").isString().withMessage("ort field required"),
  check("pruefer").isString().withMessage("pruefer field required"),
  check("gueltigBis").isString().withMessage("gueltigBis field verhalten"),
  check("letztePrüfung").isString().withMessage("letztePrüfung field required"),

  check("kennzeichen").isLength({min:1}).withMessage("Minimum Length kennzeichen did not match"),
  check("ort").isLength({min:1}).withMessage("Minimum Length anmerkungen did not match"),

  check("kennzeichen").isLength({max:11}).withMessage("Minimum Length kennzeichen did not match"),

];

export const newTuevValidators = [
  check("kennzeichen").notEmpty().withMessage("kennzeichen field required"),
  check("ort").notEmpty().withMessage("ort field required"),
  check("pruefer").notEmpty().withMessage("pruefer field required"),
  check("gueltigBis").notEmpty().withMessage("gueltigBis field verhalten"),
  check("letztePrüfung").notEmpty().withMessage("letztePrüfung field required"),

  check("kennzeichen").isString().withMessage("kennzeichen field required"),
  check("ort").isString().withMessage("ort field required"),
  check("pruefer").isString().withMessage("pruefer field required"),
  check("gueltigBis").isString().withMessage("gueltigBis field verhalten"),
  check("letztePrüfung").isString().withMessage("letztePrüfung field required"),

  check("kennzeichen").isLength({min:1}).withMessage("Minimum Length kennzeichen did not match"),
  check("ort").isLength({min:1}).withMessage("Minimum Length anmerkungen did not match"),

  check("kennzeichen").isLength({max:11}).withMessage("Maximum Length kennzeichen did not match"),
];