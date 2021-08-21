const express = require("express");
const cors = require("cors");
const commentController = require("./controller.js");
const getRandomIndex = require("./utils/get-random-index.js");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = [
    "Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomCompliment = compliments[getRandomIndex(compliments)];

  res.status(200).send(randomCompliment);
});

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
  let randomFortune = fortunes[getRandomIndex(fortunes)];

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
  let randomUnfortune = unfortunes[getRandomIndex(unfortunes)];

  res.status(200).send(randomUnfortune);
});

// Called when a GET request is recieved at this endpoint (this url)
app.get(`/api/comments`, (req, res) => {
  const comments = commentController.getComments();
  
  res.status(200).json(comments);
});

// Called when a POST request is recieved at this endpoint (this url)
app.post(`/api/comments`, (req, res) => {
  const { comment } = req.body;

  // Add the comment
  commentController.addComment(comment);

  // If this request was with javascript, send back the comment
  // If this request was with javascript, send back the comment
  if (req.headers["content-type"].includes("application/json")) {
    res.status(200).send(comment);
  } else {
    // Otherwise, we need to redirect the user back to index.html
    // Disable javascipt in your browser's settings to see this in
    // action (the form should still work, albeit with a page refresh this time).
    // We didn't test this yet. If this doesn't work, let me know and we can debug it.
    res.set("Location", "/");
    res.status(200).send("Redirecting...");
  }
});

app.listen(4000, () => console.log("Server running on 4000"));
