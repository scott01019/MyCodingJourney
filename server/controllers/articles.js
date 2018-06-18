const mongoose = require("mongoose")
const Article = mongoose.model("Article")

module.exports = (() => {
    return {
        article: (req, res) => {
            Article.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        articles: (req, res) => {
            Article.find({}, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()