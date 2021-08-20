const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.listen(4000, () => console.log("Server running on 4000"));

//FOURTINE SEGMENT ps i cant believe it worked because my live server effed for a sec

app.get("/api/fortune", (req, res) => {
  const fortunes = [
    "A soft voice may be awfully persuasive.",
    "All will go well with your new project.",
    "An inch of time is an inch of gold.",
    "Change is happening in your life, so go with the flow!",
    "Do not let ambitions overshadow small success.",
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

//UNFORTUNE SEGMENT
app.get("/api/unfortune", (req, res) => {
  const unfortunes = [
    "you will never make it in life",
    "you look like shrek",
    "remember you have work on sunday",
    "wow you're still single???",
  ];

  //choose random unfortune
  let randomIndex = Math.floor(Math.random() * unfortunes.length);
  let randomUnfortune = unfortunes[randomIndex];

  res.status(200).send(randomUnfortune);
});

//POST COMMENT im having trouble making this work 
const ctrl = require('./controller.js');
app.post(`/api/comment`, ctrl.kindComment)



