require("./../config/mongoose")
const mongoose = require("mongoose")

module.exports = new Promise((res, rej) => {
    const User = mongoose.model("User");
    
    const genUsers = async () => {
        for (let i = 0; i < 200; ++i) {
            const user = new User({
                userId: i,
                role: "user",
                commentsLiked: [],
                articleLikes: [],
                comments: [],
                displayName: String(i)
            })

            await user.save()
        }

        res("Finished creating users.")
    }

    genUsers()

})