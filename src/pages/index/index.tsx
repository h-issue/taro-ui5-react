import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

import { Button } from '@ui5/webcomponents-react';

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button onClick={() => console.log('Hello world from ui5.')}>Hello world from ui5!</Button>
    </View>
  )
}
