const mongoose = require("mongoose")
const rand = require("./util").rand

module.exports = new Promise((res, rej) => {
    const User = mongoose.model("User")
    const Comment = mongoose.model("Comment")

    const Users = () => new Promise((res, rej) => {
        User.find({}, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })

    const Comments = () => new Promise((res, rej) => {
        Comment.find({}, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })

    const genCommentLikes = async () => {
        const users = await Users()
        const comments = await Comments()

        for (let i = 0; i < comments.length; ++i) {
            for (let j = 0; j < users.length; ++j) {
                if (rand(100, 0) < 2) {
                    comments[i].likedBy.push(users[j]._id)
                    users[j].commentsLiked.push(comments[i]._id)
                    await comments[i].save()
                    await users[j].save()
                }
            }
        }

        res("Finished creating article likes.")
    }
    
    genCommentLikes()
})