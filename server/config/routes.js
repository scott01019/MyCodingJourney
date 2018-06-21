const articles = require("./../controllers/articles")
const discussions = require("./../controllers/discussions")
// const conversations = require("./../controllers/conversations")
// const comments = require("./../controllers/comments")
// const users = require("./../controllers/users")

module.exports = (app) => {
    app.get("/api/articles/:id", (req, res) => { articles.article(req, res) })
    app.get("/api/articles", (req, res) => { articles.articles(req, res) })

    app.get("/api/discussions/:id", (req, res) => { discussions.discussion(req, res) })
    
    // app.post("/api/conversations/create", (req, res) => { conversations.createConversation(req, res) })
    // app.put("/api/conversations/:id", (req, res) => { conversations.updateConversations(req, res) })

    // app.get("/api/comments/:id", (req, res) => { comments.comment(req, res) })
    // app.post("/api/comments/create", (req, res) => { comments.createComment(req, res) })
    // app.put("/api/comments/:id", (req, res) => { comments.updateComment(req, res) })

    // app.get("/api/users/:id", (req, res) => { users.user(req, res) })
    // app.post("/api/users/create", (req, res) => { users.createUser(req, res) })
    // app.put("/api/users/:id", (req, res) => { users.updateUser(req, res) })
}