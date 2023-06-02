import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'

import { ThemeProvider } from '@ui5/webcomponents-react';

function App({ children }: PropsWithChildren) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  // return children
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App
