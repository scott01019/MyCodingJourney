const mongoose = require("mongoose")
const Conversation = require("./conversation")

const DiscussionSchema = mongoose.Schema({
    article: { type: mongoose.Schema.Types.ObjectId, ref: "Article", required: true },
    conversations: { type: [ mongoose.model("Conversation").Schema ], default: [] }
}, { timestamps: true })

mongoose.model("Discussion", DiscussionSchema)