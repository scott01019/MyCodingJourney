const mongoose = require("mongoose")

const ArticleSchema = mongoose.Schema({
    title: { type: String, required: true },
    subTitle: { type: String },
    img: { type: String },
    contents: { type: [{ component: String, content: String, style: String }], default: [] },
    likedBy: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], default: [] },
    tags: { type: [String], default: [] },
    discussion: { type: mongoose.Schema.Types.ObjectId, ref: "Discussion" }
}, { timestamps: true })

mongoose.model("Article", ArticleSchema)