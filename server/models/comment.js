const mongoose = require("mongoose")

const CommentSchema = mongoose.Schema({
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: "Conversation", required: true },
    content: { type: String, required: true },
    likedBy: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], default: [] },
    user: { type: {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        displayName: { type: String, required: true },
        avatar: { type: String, default: null }
    }, required: true }
}, { timestamps: true })

mongoose.model("Comment", CommentSchema)
