const mongoose = require("mongoose")
const Comment = mongoose.model("Comment")

module.exports = (() => {
    return {
        comment: (req, res) => {
            Comment.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        createComment: (req, res) => {
            Comment.create(req.body, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        updateComment: (req, res) => {
            Comment.findByIdAndUpdate(req.params.id, { $set: {
                conversation: req.body.conversation,
                content: req.body.content,
                likedBy: req.body.likedBy,
                user: {
                    userId: req.body.userId,
                    displayName: req.body.displayName,
                    avatar: req.body.avatar
                }
            }}, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()