const comments = require("./db.json");

let nextId = comments[comments.length - 1].id + 1;

const getComments = () => {
  return comments
};

const addComment = (comment) => {
  comments.push({
    id: nextId,
    text: comment
  })

  nextId++;
};

module.exports = {
  getComments,
  addComment,
};
