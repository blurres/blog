import express from "express"
import bodyParser from "body-parser"


// Creating server
const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(PORT, (req, res) => {
    console.log(`Listenning on port ${PORT}...`);
})
