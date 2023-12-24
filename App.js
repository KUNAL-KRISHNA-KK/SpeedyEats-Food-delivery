import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Navigation'

import { Provider } from 'react-redux'
import { store } from './store'


export default function App() {
  return (

    <Provider store={store}>
      <Navigation/>
    </Provider>
  )
}