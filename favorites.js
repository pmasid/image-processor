import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

// NOTE: Usign dimensions because cross-plataform issues with android

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

export default class Favorites extends Component {
  state = {}

  render = () => {
    return(
      <View style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT}}>
        
      </View>
    )
  }
}
