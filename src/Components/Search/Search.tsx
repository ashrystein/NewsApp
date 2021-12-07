import React, {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useState
} from 'react'
import { View, TextInput } from 'react-native'

import { ArticleType } from '../../Services/types'
import { translate } from '../../i18n/helpers'

import { testIds } from './Search.testIds'
import styles from './Search.styles'
import { searchByKeyword } from './Search.helpers'

type SearchProps<T> = {
  setData: Dispatch<SetStateAction<T[]>>
  data: T[]
}

const Search = <T extends ArticleType>({ data, setData }: SearchProps<T>) => {
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    setKeyword('')
  }, [data])

  const onChange = (text: string) => {
    setKeyword(text)
    const searchData = searchByKeyword(data, text)
    searchData && setData(searchData)
  }

  return (
    <View style={styles.container} testID={testIds.Search_Wrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={translate('Search')}
        placeholderTextColor={'gray'} //theme
        value={keyword}
        onChangeText={onChange}
        testID={testIds.Search_Input}
      />
    </View>
  )
}

export default memo(Search)
