const mongoose = require("mongoose")
const rand = require("./util").rand

module.exports = new Promise((res, rej) => {
    const User = mongoose.model("User")
    const Article = mongoose.model("Article")

    const Users = () => new Promise((res, rej) => {
        User.find({}, (err, data) => {
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

    const genArticleLikes = async () => {
        const users = await Users()
        const articles = await Articles()

        for (let i = 0; i < articles.length; ++i) {
            for (let j = 0; j < users.length; ++j) {
                if (rand(10, 0) < 2) {
                    articles[i].likedBy.push(users[j]._id)
                    users[j].articlesLiked.push(articles[i]._id)
                    await articles[i].save()
                    await users[j].save()
                } 
            }
            articles[i].numLikes = articles[i].likedBy.length
            await articles[i].save()
        }

        res("Finished creating article likes.")
    }
    
    genArticleLikes()
})