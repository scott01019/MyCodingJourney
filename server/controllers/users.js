const mongoose = require("mongoose")
const User = mongoose.model("User")

module.exports = (() => {
    return {
        user: (req, res) => {
            User.findById(req.params.id, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        createUser: (req, res) => {
            User.create(req.body, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        },

        updateUser: (req, res) => {
            User.findByIdAndUpdate(req.params.id, { $set: {
                
            }}, (err, data) => {
                if (err) res.json(err)
                else res.json(data)
            })
        }
    }
})()