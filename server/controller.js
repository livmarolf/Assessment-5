const comments = require ('./db.json');
let globalId = 1;

module.exports = {
    kindComment: (req, res) => {
        const { comment } = req.body
        const newKindComment = {
            id: globalId,
            comment
        }

        comments.push(newKindComment)
        res.status(200).send(comment)
        globalId++
    }
}
//here i got stuck because i think this whole comment thing is functional however i cant find out how how to put it on my page
//im trying to make the comments display then when you press add comment itll add to the list of comments 
