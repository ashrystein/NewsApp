export type ArticleType = {
  source: {
    id: string
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export type NewsDataType = {
  status: string
  totalResults: number
  articles: ArticleType[]
}
