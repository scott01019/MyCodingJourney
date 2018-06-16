export interface Article {
    _id: string
    title: string
    subTitle: string
    img: string
    contents: [{ component: string, content: string, style: string }]
    likedBy: [string]
    tags: [string]
    discussion: [string]
    createdAt: Date
    updatedAt: Date
}