const express = require("express");
const cors = require("cors");
const questions = require("./questions");

const app = express();

app.use(cors());
app.use(express.json());

let leaderboard = [];   // store user scores

// Get questions
app.get("/questions", (req, res) => {
    res.json(questions);
});

// Submit score
app.post("/submit", (req, res) => {

    const {name, score} = req.body;

    leaderboard.push({
        name,
        score,
        date: new Date()
    });

    // Sort leaderboard by score
    leaderboard.sort((a,b)=> b.score - a.score);

    res.json({message:"Score saved"});
});

// Get leaderboard
app.get("/leaderboard", (req,res)=>{
    res.json(leaderboard);
});

app.listen(5000,()=>{
    console.log("Server running on port 5000");
});