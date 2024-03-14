import express from "express";
import { pirates } from "../data/characters.js";

const pirateRouter = express.Router();

pirateRouter.get('/', (req, res) => res.render('pages/pirates',
{
    pageTitle: "Pirates",
    characters: pirates,
    footer: "Noahs site"
}))

pirates.forEach(pirate => {

    pirateRouter.get(`/${pirate.id}`, (req, res) => res.render('pages/details',
    {
        pageTitle: "Pirate Details",
        character: pirate,
        footer: "Noahs site"
    }))
})


  
export default pirateRouter;