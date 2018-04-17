import Expo from 'expo'
import React, {Component} from 'react'
import {View, CameraRoll, Text, Image} from 'react-native'
import Card from './card'

export default class App extends Component {

  state = {
    imageIndex: 0,
    images: [],
    isReady: false,
  }

  componentWillMount = () => {
    this.getImages()
  }

  getImages = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
    }).then(images => {
      this.setState({ images: images}, () => this.setState({isReady: true}));
    })
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

  render() {
    const {imageIndex, isReady, images} = this.state
    if (isReady) {
      return (
        <View style={{flex:1}}>
        <Image 
            source={require('./assets/like.png')}
            style= {{alignSelf: 'flex-end',marginTop: 30,marginRight:15,}}
          />
        <Image 
            source={require('./assets/dislike.png')}
            style= {{marginTop:-20,marginLeft:15,}}
          />
          <Text style={{fontSize:20, textAlign:'center', marginTop: -30,}}>Unsorted Photos</Text>
          <Text style={{fontSize:15, textAlign:'center', marginTop: 5,}}> 100 Remaining</Text>
            {images.edges.slice(imageIndex, imageIndex + 3).reverse().map((image) => {
              return (
                <Card
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

