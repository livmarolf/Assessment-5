import "./form-controls.js";
import { getComments } from "./comments.js";

document.getElementById("complimentButton").addEventListener("click", () => {
  axios.get("http://localhost:4000/api/compliment/").then((response) => {
    const data = response.data;
    alert(data);
  });
});

// get forturne
document.getElementById("fortuneButton").addEventListener("click", () => {
  axios.get("http://localhost:4000/api/fortune/").then((response) => {
    const data = response.data;
    alert(data);
  });
});

//get unfortune
document.getElementById("unfortuneButton").addEventListener("click", () => {
  axios.get("http://localhost:4000/api/unfortune/").then((response) => {
    const data = response.data;
    alert(data);
  });
});

// Retrieve all of the comments from the server and update the DOM
getComments();
