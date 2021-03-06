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
import { Colors } from '../../Themes'

import { testIds } from './Search.testIds'
import styles from './Search.styles'
import { searchByKeyword } from './Search.helpers'

type SearchProps<T> = {
  setData: Dispatch<SetStateAction<T[]>>
  setSearching: Dispatch<SetStateAction<boolean>>
  data: T[]
}

const Search = <T extends ArticleType>({
  data,
  setData,
  setSearching
}: SearchProps<T>) => {
  const [keyword, setKeyword] = useState<string>('')

  useEffect(() => {
    setKeyword('')
  }, [data])

  const onChange = (text: string) => {
    setKeyword(text)
    setSearching(!!text)
    const searchData = searchByKeyword(data, text)
    searchData && setData(searchData)
  }

  return (
    <View style={styles.container} testID={testIds.Search_Wrapper}>
      <TextInput
        style={styles.searchInput}
        placeholder={translate('Search')}
        placeholderTextColor={Colors.lightGrey}
        value={keyword}
        onChangeText={onChange}
        testID={testIds.Search_Input}
      />
    </View>
  )
}

export default memo(Search)
