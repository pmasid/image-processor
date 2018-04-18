import Expo from 'expo'
import React, {Component} from 'react'
import {View, CameraRoll, Text, Image} from 'react-native'
import Images from './images'
import Favorites from './favorites'
import Deleted from './deleted'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {

  render = () => (
    <Router>
      <Scene key="root">
        <Scene
          initial
          key="images"
          component={Images}
          hideNavBar
        />
        <Scene
          key="favorites"
          component={Favorites}
          title="Add photos to favorites"
        />
        <Scene
          key="deleted"
          component={Deleted}
          title="Remove photos from phone"
        />
      </Scene>
    </Router>
  )

}
