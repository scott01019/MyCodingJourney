import { Conversation } from "./conversation";

export interface Discussion {
    _id: string
    article: string
    conversations: Conversation[]
    createdAt: Date
    updatedAt: Date
}