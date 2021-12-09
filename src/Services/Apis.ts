import axios from 'axios'

import { APIKEY, BASEURL } from './config'
import { NewsDataType } from './types'

const getNews = async (page: number = 1): Promise<NewsDataType> => {
  const endpointURL = `${BASEURL}?q=apple&from=2021-12-05&to=2021-12-05&sortBy=popularity&page=${page}&apiKey=${APIKEY}`
  const data: NewsDataType = await (await axios.get(endpointURL)).data
  return data
}

export { getNews }
