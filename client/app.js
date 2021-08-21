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

document.getElementById("commentForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("commentInput");
  const comment = input.value;

  axios
    .post("http://localhost:4000/api/comment/", {
      comment,
    })
    .then((response) => {
        appendComment(response.data);
        input.value = ''
    });
});

// Comment DOM stuff

const commentsSection = document.querySelector("#comments");

function appendComment(text) {
  const p = document.createElement("p");
  p.textContent = text;
  commentsSection.appendChild(p);
}
