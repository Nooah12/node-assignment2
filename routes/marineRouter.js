import express from "express";
import {marines} from "../data/characters.js";

const marineRouter = express.Router();

marineRouter.get('/', (req, res) => res.render('pages/marines',
    {
        pageTitle: "Marines",
        characters: marines,
        footer: "Noahs site"
    }))

marines.forEach(marine => {

    marineRouter.get(`/${marine.id}`, (req, res) => res.render('pages/details',
        {
            pageTitle: "Marine Details",
            character: marine,
            footer: "Noahs site"
        }))
})
    

export default marineRouter;