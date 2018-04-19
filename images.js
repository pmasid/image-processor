import Expo from 'expo'
import React, {Component} from 'react'
import {View, CameraRoll, Text, Image, Dimensions} from 'react-native'
import Card from './card'
import {Button} from 'native-base'
import { Actions } from 'react-native-router-flux'

const {width, height} = Dimensions.get('window')

// NOTE: Native-base is component library backup by Facebook React team that make easier to built components.

export default class Images extends Component {

  state = {
    imageIndex: 0,
    images: [],
    isReady: false,
    favoritedImages: [],
    deletedImages: []
  }

  componentDidMount = () => {
    this.getImages()
  }

  onFavoritesPress = () => {
    let images = [...this.state.favoritedImages]
    Actions.favorites({favoritedImages: images})
  }

  onDeletedPress = () => {
    let images = [...this.state.deletedImages]
    Actions.deleted({deletedImages: images})
  }

  getImages = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    }).then(images => {
      this.setState({ images: images}, () => this.setState({isReady: true}));
    })
  }

  onSwipeRight = (image) => {
    this.setState({ favoritedImages: [...this.state.favoritedImages, image] })
  }

  onSwipeLeft = (image) => {
    this.setState({ deletedImages: [...this.state.deletedImages, image] })
  }

  renderPhotos = () => {
    let { images } = this.state
    return images.edges.map(image =>
      <View key={image.node.image.uri}>
        <Text>{new Date(image.node.timestamp).toDateString()}</Text>
        <Text>{image.node.location.latitude + "," + image.node.location.longitude}</Text>
        <Text>{image.node.image.filename}</Text>
        <Text>{image.node.image.uri}</Text>
        <Text>{image.node.image.width}x{image.node.image.height}</Text>
      </View>
    )
  }

  nextCard = () => {
    this.setState({imageIndex: this.state.imageIndex + 1})
  }

  remainingCount = () => {
    return this.state.images.edges.length - this.state.imageIndex
  }

  render = () => {
    const {imageIndex, isReady, images, favoritedImages} = this.state
    let { onFavoritesPress, onDeletedPress } = this
    if (isReady) {
      return (
        <View style={{width: width, height: height}}>
        <View style={{width: width, height: height * 0.20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <Button onPress={() => onDeletedPress()} transparent style={{alignSelf: 'center'}}>
            <Image source={require('./assets/dislike.png')}/>
          </Button>
          <View>
            <Text style={{fontSize:20, textAlign:'center'}}>Unsorted Photos</Text>
            <Text style={{fontSize:15, textAlign:'center'}}> {this.remainingCount()} Remaining</Text>
          </View>
          <Button onPress={() => onFavoritesPress()} transparent style={{alignSelf: 'center'}}>
            <Image source={require('./assets/like.png')}/>
          </Button>
        </View>

            {images.edges.slice(imageIndex, imageIndex + 3).reverse().map((image) => {
              return (
                <Card
                  onSwipeRight={this.onSwipeRight}
                  onSwipeLeft={this.onSwipeLeft}
                  key={image.node.image.uri}
                  image={image}
                  onSwipeOff={this.nextCard}
                />
              )
            })}
        </View>
      )
    } else {
      return null
    }
  }

}
