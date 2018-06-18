import { Comment } from "./comment"

export interface Conversation {
    _id: string
    discussion: string
    comments: Comment[]
    createdAt: Date
    updatedAt: Date
}