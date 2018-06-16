const mongoose = require("mongoose")
const Article = mongoose.model("Article")

const compareLatest = (a, b) => {
    if (a.createdAt > b.createdAt) return 1
}

module.exports = (() => {
    return {
        articles: (req, res) => {
            Article.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        latestArticles: (req, res) => {
            Article.find({}).sort({ "createdAt": -1 }).limit(9).exec((err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()