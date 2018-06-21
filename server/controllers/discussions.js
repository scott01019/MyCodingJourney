const mongoose = require("mongoose")
const Discussion = mongoose.model("Discussion")

module.exports = (() => {
    return {
        discussion: (req, res) => {
            Discussion.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()