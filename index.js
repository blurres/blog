import express from "express"
import bodyParser from "body-parser"


// Creating server
const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        posts: posts,
    });
})

app.get("/create", (req, res) => {
    res.render("addPost.ejs");
})

app.listen(PORT, (req, res) => {
    console.log(`Listenning on port ${PORT}...`);
})


// Posts
const posts = [
    {
        id: 1,
        title: "Building Better Habits with Small Automations",
        description: "A practical look at the tiny scripts and shortcuts that can make everyday work calmer and more consistent.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 2,
        title: "A Slow Weekend in the Mountains",
        description: "What happens when you trade a packed itinerary for quiet trails, local food, and time to notice the view.",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 3,
        title: "Designing a More Focused Morning",
        description: "A simple morning routine built around fewer notifications, better coffee, and one meaningful first task.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 4,
        title: "The Comfort of Homemade Pasta",
        description: "A beginner-friendly guide to making fresh pasta at home, including the mistakes that teach you the most.",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 5,
        title: "Finding Ideas in Ordinary Places",
        description: "Five low-pressure ways to collect creative inspiration without waiting for the perfect idea to arrive.",
        image: "https://images.pexels.com/photos/1546542/pexels-photo-1546542.jpeg"
    }
]
