import { Alert } from 'react-native'

import { translate } from '../../i18n/helpers'

const alertMessage = (
  title: string,
  message: string,
  actionBtnText: string,
  action?: Function
) => {
  Alert.alert(translate(title), translate(message), [
    { text: translate('Cancel') },
    {
      text: translate(actionBtnText),
      onPress: () => action?.()
    }
  ])
}

export { alertMessage }
