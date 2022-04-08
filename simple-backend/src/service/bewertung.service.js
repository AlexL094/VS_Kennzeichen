"use strict"

import DatabaseFactory from "../database.js";
import {ObjectId} from "mongodb";


export default class BeweretungService {
    /**
     * Konstruktor.
     */
    constructor() {
        this.bewertungen = DatabaseFactory.database.collection("bewertungen");
    }

    /**
     * @param {Object} query
     * @return {Promise} 
     */
     async search(query) {
        let cursor = this.bewertungen.find({});
        return cursor.toArray();
    }

    /**
     *
     * @param {Object} bewertung 
     * @return {Promise} Gespeicherte bewertungdaten
     */
    async create(bewertung) {
        bewertung = bewertung || {};

        let newBewertungen = {
            kennzeichen: bewertung.kennzeichen || "",
            spurhaltung:  bewertung.spurhaltung  || "",
            verhalten:      bewertung.verhalten      || "",
            anmerkungen:      bewertung.anmerkungen      || "",
        };

        let result = await this.bewertungen.insertOne(newBewertungen);
        return await this.bewertungen.findOne({_id: result.insertedId});
    }

    /**
     * Auslesen einer vorhandenen bewertunge anhand ihrer ID.
     *
     * @param {String} id ID der gesuchten bewertung
     * @return {Promise} Gefundene bewertungdaten
     */
    async read(id) {
        if(id.length <8){
            let result = await this.bewertungen.findOne({"bewertung": id.toUpperCase()});
            return result;

        }if(id.length === 24){
            console.log('Wuff')
            let result = await this.bewertungen.findOne({_id: new ObjectId(id)});
            return result;
        }else{
            return {
                "code": "Invalid Input",
                "message": "This was an Invalid Input"
            }
        }
    }

    /**
     * Aktualisierung einer bewertunge, durch Überschreiben einzelner Felder
     * oder des gesamten bewertungobjekts (ohne die ID).
     *
     * @param {String} id ID der gesuchten bewertunge
     * @param {[type]} bewertung Zu speichernde bewertungdaten
     * @return {Promise} Gespeicherte bewertungdaten oder undefined
     */
    async update(id, bewertung) {
        let oldbewertung = await this.bewertungen.findOne({_id: new ObjectId(id)});
        if (!oldbewertung) return;

        let updateDoc = {
            $set: {},
        }

        if (bewertung.kennzeichen) updateDoc.$set.kennzeichen = bewertung.kennzeichen;
        if (bewertung.spurhaltung)  updateDoc.$set.spurhaltung  = bewertung.spurhaltung;
        if (bewertung.verhalten)      updateDoc.$set.verhalten      = bewertung.verhalten;
        if (bewertung.anmerkungen)      updateDoc.$set.anmerkungen      = bewertung.anmerkungen;


        await this.bewertungen.updateOne({_id: new ObjectId(id)}, updateDoc);
        return this.bewertungen.findOne({_id: new ObjectId(id)});
    }

    /**
     * Löschen einer bewertunge anhand ihrer ID.
     *
     * @param {String} id ID der gesuchten bewertunge
     * @return {Promise} Anzahl der gelöschten Datensätze
     */
    async delete(id) {
        let result = await this.bewertungen.deleteOne({_id: new ObjectId(id)});
        return result.deletedCount;
    }
}
