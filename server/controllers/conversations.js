const mongoose = require("mongoose")
const Conversation = mongoose.model("Conversation")

module.exports = (() => {
    return {
        conversation: (req, res) => {
            Conversation.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        createConveersation: (req, res) => {
            Conversation.create(req.body, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        updateConversation: (req, res) => {
            Conversation.findByIdAndUpdate(req.params.id, { $set: {
                discussion: req.body.discussions,
                comments: req.body.comments
            }}, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()