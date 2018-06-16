const mongoose = require("mongoose")
const Comment = require("./comment")

const ConversationSchema = mongoose.Schema({
    discussion: { type: mongoose.Schema.Types.ObjectId, ref: "Discussion", required: true }, 
    comments: { type: [ mongoose.model("Comment").Schema ], default: [] }
}, { timestamps: true })

mongoose.model("Conversation", ConversationSchema)