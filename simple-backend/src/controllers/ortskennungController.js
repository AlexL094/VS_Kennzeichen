import { check, validationResult } from "express-validator";
import { Ortskennung } from "../models/ortskennungModal.js";


// Return of all Ortskennungs
export const getOrtskennung = async (req, res) => {
  // allow frontend to access this call
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const ortskennung = await Ortskennung.find();
  res.status(200).send(ortskennung);
};

// Return a Ortskennung by id

export const getOrtskennungById = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let ortskennung = await Ortskennung.findById(req.params.id);
    res.status(200).send(ortskennung);
  }
};

// Return a Ortskennung by ortskürzel

export const getOrtskennungByOrtskürzel = async (req, res) => {
  let result = await Ortskennung.find({ ortskürzel: req.query.ortskürzel });
  res.status(200).send(result);
};

// Add a Ortskennung


export const addOrtskennung = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const ortskennung = new Ortskennung({
    ortskürzel: req.body.ortskürzel,
    landkreis: req.body.landkreis,
    bundesland: req.body.bundesland,
  });
  ortskennung.save(ortskennung).then((ortskennung) => res.status(201).send(ortskennung));
};

// Delete a Ortskennung by id

export const deleteOrtskennung = async (req, res) => {
  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{
    let ortskennung = await Ortskennung.findById(req.params.id);
    if(ortskennung != null ){
        await Ortskennung.deleteOne({ id: req.params.id });
        res.status(200).send('Deleted successful');
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Put a Ortskennung by id

export const putOrtskennung = async (req, res) => {

  if(req.params.id.length != 24){
    res.status(400).send({error: 'Invalid id'});
  }else{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    const ortskennung = await Ortskennung.findById(req.params.id);
    if(ortskennung != null){
      let newPutOrtskennung = new Ortskennung({
        ortskürzel: req.body.ortskürzel,
        landkreis: req.body.landkreis,
        bundesland: req.body.bundesland,
      });
      await Ortskennung.replaceOne(
        {
          id: req.params.id,
        },
        {
          id: req.params.id,
          ortskürzel: req.body.ortskürzel,
          landkreis: req.body.landkreis,
          bundesland: req.body.bundesland,
        }
      );
      res.status(200).send(newPutOrtskennung);
    }else{
      res.status(400).send({error: 'This Element is not in the Database'});
    }
  }
};

// Validators for Body


export const putOrtskennungValidators = [
  check("ortskürzel").notEmpty().withMessage("ortskürzel field required"),
  check("landkreis").notEmpty().withMessage("landkreis field required"),
  check("bundesland").notEmpty().withMessage("bundesland field required"),

  check("ortskürzel").isString().withMessage("ortskürzel must be a String required"),
  check("landkreis").isString().withMessage("landkreis must be a String required"),
  check("bundesland").isString().withMessage("bundesland must be a String required"),


  check("ortskürzel").isLength({min:1}).withMessage("Minimum Length ortskürzel did not match"),
  check("landkreis").isLength({min:1}).withMessage("Minimum Length landkreis did not match"),
  check("bundesland").isLength({min:1}).withMessage("Minimum Length bundesland did not match"),

  check("ortskürzel").isLength({max:4}).withMessage("Maximum Length ortskürzel did not match"),


];

export const newOrtskennungValidators = [
  check("ortskürzel").notEmpty().withMessage("ortskürzel field required"),
  check("landkreis").notEmpty().withMessage("landkreis field required"),
  check("bundesland").notEmpty().withMessage("bundesland field required"),

  check("ortskürzel").isString().withMessage("ortskürzel must be a String required"),
  check("landkreis").isString().withMessage("landkreis must be a String required"),
  check("bundesland").isString().withMessage("bundesland must be a String required"),


  check("ortskürzel").isLength({min:1}).withMessage("Minimum Length ortskürzel did not match"),
  check("landkreis").isLength({min:1}).withMessage("Minimum Length landkreis did not match"),
  check("bundesland").isLength({min:1}).withMessage("Minimum Length bundesland did not match"),


  check("ortskürzel").isLength({max:4}).withMessage("Maximum Length ortskürzel did not match"),

];