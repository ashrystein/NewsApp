import { Linking } from 'react-native'
//@ts-ignore
import { decode } from 'base-64'

const config = {
  screens: {
    Splash: 'Splash',
    TabNav: {
      path: 'TabNav',
      screens: {
        NewsFeedTab: {
          path: 'NewsFeedTab',
          screens: {
            NewsFeed: 'NewsFeed',
            ArticleDetails: {
              path: 'ArticleDetails/:title/:description/:author/:publishedAt/:urlToImage',
              parse: {
                urlToImage: (urlToImage: string) => decode(urlToImage),
                title: (title: string) => decode(title),
                description: (description: string) => decode(description),
                author: (author: string) => decode(author),
                publishedAt: (publishedAt: string) => decode(publishedAt)
              }
            }
          }
        },
        SettingsTab: {
          path: 'SettingsTab',
          screens: {
            Settings: 'Settings'
          }
        }
      }
    }
  }
}

const linking = {
  prefixes: ['musala://'],
  config,
  async getInitialURL() {
    const url = await Linking.getInitialURL()
    if (url != null) {
      return url
    }
  }
}

export default linking
