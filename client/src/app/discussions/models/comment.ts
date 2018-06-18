export interface User {
    userId: string
    displayName: string
    avatar: string
}

export interface Comment {
    _id: string
    conversation: string
    content: string
    likedBy: string[]
    user: User
    createdAt: Date
    updatedAt: Date
}