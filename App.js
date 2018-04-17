import Expo from 'expo'
import React, {Component} from 'react'
import {View, CameraRoll, Text, Image} from 'react-native'
import Photos from './photos'
import Favorites from './favorites'
import { Router, Scene } from 'react-native-router-flux'

export default class App extends Component {

  render = () => (
    <Router>
      <Scene key="root">
        <Scene

          key="photos"
          component={Photos}
          hideNavBar
        />
        <Scene
          initial
          key="favorites"
          component={Favorites}
          title="Add photos to favorites"
        />
      </Scene>
    </Router>
  )

}
