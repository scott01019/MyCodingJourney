export interface Article {
    _id: string
    title: string
    subTitle: string
    img: string
    contents: [{ _id: string, component: string, content: string, style: string }]
    likedBy: [string]
    numLikes: number
    numComments: number
    tags: [string]
    discussion: string
    createdAt: Date
    updatedAt: Date
}

export enum ARTICLE_SORTS {
    LATEST = "Latest",
    OLDEST = "Oldest",
    POPULAR = "Popular"
}

export const oldestCmp = (a: Article, b: Article) => {
    if (a.createdAt < b.createdAt) return -1
    else if (a.createdAt > b.createdAt) return 1
    return 0
}

export const latestCmp = (a: Article, b: Article) => {
    if (a.createdAt < b.createdAt) return 1
    else if (a.createdAt > b.createdAt) return -1
    return 0

}

export const popularCmp = (a: Article, b: Article) => {
    if (a.numLikes < b.numLikes) return 1
    else if (a.numLikes > b.numLikes) return -1
    return 0
}