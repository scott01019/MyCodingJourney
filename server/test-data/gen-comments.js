require("./../config/mongoose")
const mongoose = require("mongoose")
const fastLoremIpsum = require("fast-lorem-ipsum")
const rand = require("./util").rand

module.exports = new Promise((res, rej) => {    
    const User = mongoose.model("User")
    const Discussion = mongoose.model("Discussion")
    const Article = mongoose.model("Article")

    const Users = () => new Promise((res, rej) => {
        User.find({}, (err, data) => { 
            if (err) rej(err)
            else res(data)
        })
    })

    const Discussions = () => new Promise((res, rej) => {
        Discussion.find({}, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })

    const Articles = () => new Promise((res, rej) => {
        Article.find({}, (err, data) => {
            if (err) rej(err)
            else res(data)
        })
    })

    const genComments = async () => {
        const users = await Users()
        const discussions = await Discussions()
        const articles = await Articles()

        const Conversation = mongoose.model("Conversation")
        const Comment = mongoose.model("Comment")

        discussions.forEach(async (discussion) => {
            const article = articles.filter(article => String(article.discussion) === String(discussion._id))[0]
            for (let i = 0; i < rand(10, 0); ++i) {
                const conversation = new Conversation({
                    discussion: discussion._id
                })
    
                for (let j = 0; j < rand(11, 1); ++j) {
                    const user = users[rand(users.length, 0)]
    
                    const comment = new Comment({
                        conversation: conversation._id,
                        content: fastLoremIpsum(rand(50, 5) + "w"),
                        likedBy: [],
                        user: {
                            userId: user._id,
                            displayName: user.displayName,
                            avatar: user.avatar
                        }
                    })
                    ++article.numComments


                    await comment.save()
                    conversation.comments.push(comment)
                }
    
                await conversation.save()
                discussion.conversations.push(conversation)
            }
            await discussion.save()
            await article.save()
        })

        res("Finished creating conversations and comments.")
    }

    genComments()
})