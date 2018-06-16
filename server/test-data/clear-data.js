require("./../config/mongoose")
const mongoose = require("mongoose")
const Article = mongoose.model("Article")
const Comment = mongoose.model("Comment")
const Conversation = mongoose.model("Conversation")
const Discussion = mongoose.model("Discussion")
const User = mongoose.model("User")

module.exports = new Promise((res, rej) => {
    const clearTables = async () => {
        await new Promise((res, rej) => {
            Article.deleteMany({}, err => {
                if (err) rej(err)
                else res()
            })
        })

        await new Promise((res, rej) => {
            Comment.deleteMany({}, err => {
                if (err) rej(err)
                else res()
            })
        })

        await new Promise((res, rej) => {
            Conversation.deleteMany({}, err => {
                if (err) rej(err)
                else res()
            })
        })

        await new Promise((res, rej) => {
            Discussion.deleteMany({}, err => {
                if (err) rej(err)
                else res()
            })
        })

        await new Promise((res, rej) => {
            User.deleteMany({}, err => {
                if (err) rej(err)
                else res()
            })
        })

        res("Finished clearing old data.")
    }

    clearTables()
})