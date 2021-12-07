import { ArticleType } from '../../Services/types'

const searchByKeyword = <T extends ArticleType>(data: T[], keyword: string) =>
  data.filter((article: T) =>
    article.title.toLowerCase().includes(keyword.toLowerCase())
  )

export { searchByKeyword }
