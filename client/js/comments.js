const commentsSection = document.querySelector("#comments");

/**
 * Gets the latest list of comments and appends them to the document.
 * 
 * @note If this this called more than once, it will show a duplicate of
 * each comment. To fix this, you would need to remove all of the children
 * of `commentsSections` before adding the new ones.
 */
export const getComments = async () => {
    const { data: comments } = await axios.get('http://localhost:4000/api/comments')
 
    comments.forEach(comment => {
        appendComment(comment.text)
    })
}

/**
 * Appends a new comment to the bottom of the comment list
 */
export const appendComment = (text) => {
    const p = document.createElement("p");
    p.textContent = text;

    commentsSection.appendChild(p);
};