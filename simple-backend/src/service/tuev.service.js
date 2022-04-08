"use strict"

import DatabaseFactory from "../database.js";
import {ObjectId} from "mongodb";


export default class TuevService {
    /**
     * Konstruktor.
     */
    constructor() {
        this._tuevs = DatabaseFactory.database.collection("tuevs");
    }

    /**

     * @param {Object} query Optionale Suchparameter
     * @return {Promise} Liste der gefundenen 
     */
     async search(query) {
        let cursor = this._tuevs.find({});
        return cursor.toArray();
    }

    /**
     *
     * @param {Object} tuev Zu 
     * @return {Promise} Gespeicherte 
     */
    async create(tuev) {
        tuev = tuev || {};

        let newOrtskennung = {
            kennzeichen:    tuev.kennzeichen    || "",
            ort:            tuev.ort            || "",
            letztePrüfung:  tuev.letztePrüfung  || "",
            gueltigBis:     tuev.gueltigBis     || "",
            pruefer:     tuev.pruefer     || "",

            
        };

        let result = await this._tuevs.insertOne(newOrtskennung);
        return await this._tuevs.findOne({_id: result.insertedId});
    }

    /**
     *
     * @param {String} id ID der gesuchten 
     * @return {Promise} Gefundene 
     */
    async read(id) {
        if(id.length <4){
            let result = await this._tuevs.findOne({"kennzeichen": id.toUpperCase()});
            return result;

        }if(id.length === 24){
            let result = await this._tuevs.findOne({_id: new ObjectId(id)});
            return result;
        }else{
            return {
                "code": "Invalid Input",
                "message": "This was an Invalid Input"
            }
        }
    }

    /**
 
     *
     * @param {String} id ID der gesuchten 
     * @param {[type]} tuev Zu speichernde 
     * @return {Promise} Gespeicherte  oder undefined
     */
    async update(id, tuev) {
        let oldtuev = await this._tuevs.findOne({_id: new ObjectId(id)});
        if (!oldtuev) return;

        let updateDoc = {
            $set: {},
        }

        if (tuev.kennzeichen) updateDoc.$set.kennzeichen = tuev.kennzeichen;
        if (tuev.ort)  updateDoc.$set.ort  = tuev.ort;
        if (tuev.gueltigBis)      updateDoc.$set.gueltigBis      = tuev.gueltigBis;
        if (tuev.letztePrüfung)      updateDoc.$set.letztePrüfung      = tuev.letztePrüfung;
        if (tuev.pruefer)      updateDoc.$set.pruefer      = tuev.pruefer;


        


        await this._tuevs.updateOne({_id: new ObjectId(id)}, updateDoc);
        return this._tuevs.findOne({_id: new ObjectId(id)});
    }

    /**
     * Löschen einer  anhand ihrer ID.
     *
     * @param {String} id ID der gesuchten 
     * @return {Promise} Anzahl der gelöschten Datensätze
     */
    async delete(id) {
        let result = await this._tuevs.deleteOne({_id: new ObjectId(id)});
        return result.deletedCount;
    }
}
