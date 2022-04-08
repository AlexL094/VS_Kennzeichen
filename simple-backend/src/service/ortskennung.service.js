"use strict"

import DatabaseFactory from "../database.js";
import {ObjectId} from "mongodb";

/**
 * Geschäftslogik zur Verwaltung von ortskennungen. Diese Klasse implementiert die
 * eigentliche Anwendungslogik losgelöst vom technischen Übertragungsweg.
 * Die ortskennungen werden der Einfachheit halber in einer MongoDB abgelegt.
 */
export default class OrtskennungService {
    /**
     * Konstruktor.
     */
    constructor() {
        this._ortskennungen = DatabaseFactory.database.collection("ortskennungen");
    }

    /**
     * ortskennungen suchen. Unterstützt wird lediglich eine ganz einfache Suche,
     * bei der einzelne Felder auf exakte Übereinstimmung geprüft werden.
     * Zwar unterstützt MongoDB prinzipiell beliebig komplexe Suchanfragen.
     * Um das Beispiel klein zu halten, wird dies hier aber nicht unterstützt.
     *
     * @param {Object} query Optionale Suchparameter
     * @return {Promise} Liste der gefundenen ortskennungen
     */
     async search(query) {
        let cursor = this._ortskennungen.find({});
        return cursor.toArray();
    }

    /**
     * Speichern einer neuen ortskennunge.
     *
     * @param {Object} ortskennung Zu speichernde ortskennungdaten
     * @return {Promise} Gespeicherte ortskennungdaten
     */
    async create(ortskennung) {
        ortskennung = ortskennung || {};

        let newOrtskennung = {
            ortskürzel: ortskennung.ortskürzel || "",
            landkreis:  ortskennung.landkreis  || "",
            bundesland:      ortskennung.bundesland      || "",
        };

        let result = await this._ortskennungen.insertOne(newOrtskennung);
        return await this._ortskennungen.findOne({_id: result.insertedId});
    }

    /**
     * Auslesen einer vorhandenen ortskennunge anhand ihrer ID.
     *
     * @param {String} id ID der gesuchten ortskennunge
     * @return {Promise} Gefundene ortskennungdaten
     */
    async read(id) {
        if(id.length <4){
            let result = await this._ortskennungen.findOne({"ortskürzel": id.toUpperCase()});
            return result;

        }if(id.length === 24){
            console.log('Wuff')
            let result = await this._ortskennungen.findOne({_id: new ObjectId(id)});
            return result;
        }else{
            return {
                "code": "Invalid Input",
                "message": "This was an Invalid Input"
            }
        }
    }

    /**
     * Aktualisierung einer ortskennunge, durch Überschreiben einzelner Felder
     * oder des gesamten ortskennungobjekts (ohne die ID).
     *
     * @param {String} id ID der gesuchten ortskennunge
     * @param {[type]} ortskennung Zu speichernde ortskennungdaten
     * @return {Promise} Gespeicherte ortskennungdaten oder undefined
     */
    async update(id, ortskennung) {
        let oldortskennung = await this._ortskennungen.findOne({_id: new ObjectId(id)});
        if (!oldortskennung) return;

        let updateDoc = {
            $set: {},
        }

        if (ortskennung.ortskürzel)      updateDoc.$set.ortskürzel           = ortskennung.ortskürzel;
        if (ortskennung.landkreis)       updateDoc.$set.landkreis            = ortskennung.landkreis;
        if (ortskennung.bundesland)      updateDoc.$set.bundesland      = ortskennung.bundesland;

        await this._ortskennungen.updateOne({_id: new ObjectId(id)}, updateDoc);
        return this._ortskennungen.findOne({_id: new ObjectId(id)});
    }

    /**
     * Löschen einer ortskennunge anhand ihrer ID.
     *
     * @param {String} id ID der gesuchten ortskennunge
     * @return {Promise} Anzahl der gelöschten Datensätze
     */
    async delete(id) {
        let result = await this._ortskennungen.deleteOne({_id: new ObjectId(id)});
        return result.deletedCount;
    }
}
