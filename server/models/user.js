const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    userId: { type: String, required: true },
    role: { type: String, required: true, default: "user" },
    commentsLiked: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], default: [] },
    articlesLiked: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Article" }], default: [] },
    comments: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }], default: [] },
    displayName: { type: String, required: true },
    avatar: { type: String, default: null }
}, { timestamps: true })

mongoose.model("User", UserSchema)