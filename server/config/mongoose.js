const mongoose = require("mongoose")
const path = require("path")
const fs = require("fs")

mongoose.connect("mongodb://localhost/ng_blog")

const models_path = path.join(__dirname, "../models")

fs.readdirSync(models_path).filter(file => file.indexOf(".js") > 0).forEach(file => {
    require(path.join(models_path, "/", file))
})