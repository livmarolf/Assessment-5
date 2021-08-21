import { appendComment } from "./comments.js";

/**
 * Converts`FormData` to a plain js object.
 *
 * For FormData, see https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
 * For Object.fromEntries, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 */
const extractFormData = (formElement) =>
  Object.fromEntries(new FormData(formElement));

/**
 * Form submit event handler (the name of this is arbitrary)
 *
 * @param e The event emitted from the form.
 * 
 * See https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event.
 */
const onFormSubmit = (e) => {
  // Stop the form from refreshing the page
  e.preventDefault();

  // This is the HTML <form> element in index.html
  // See https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
  const formElement = e.currentTarget;

  // Return false 
  if (!formElement.checkValidity()) return;

  const { comment } = extractFormData(formElement);

  fetch("http://localhost:4000/api/comments/", {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      comment,
    }),
  })
    .then((r) => r.text())
    .then((comment) => {
      appendComment(comment);
      formElement.reset();
    });

  // NOTE: This shouuld be fully functional.
  // * Feel free to uncomment this (and comment the fetch call above it) and see if it works.
  /* 
  axios
    .post("http://localhost:4000/api/comments/", {
      comment,
    })
    .then((response) => {
      appendComment(response.data);
      formElement.reset()
    });
  */
};

document.getElementById("commentForm").addEventListener("submit", onFormSubmit);
