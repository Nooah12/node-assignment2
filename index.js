import express from "express";
import pirateRouter from "./routes/pirateRouter.js";
import marineRouter from "./routes/marineRouter.js";

const app = express();
const port = 3030;

app.get('/', (req, res) => {
    res.render('pages/home',
        {
            pageTitle: "One Piece",
            backgroundImage: "./img/one-piece.jpg",
            footer: "Noahs site"
    }
    ); // render create path for ejs
})

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/marines', marineRouter);
app.use('/pirates', pirateRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});