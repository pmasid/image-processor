import React, { Component } from 'react'
import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import { Button, Icon } from 'native-base'

const {width, height} = Dimensions.get('window')

const PLACEHOLDER = "https://www.westland.net/venice/images/birdseye.jpg"

export default class Favorites extends Component {

  state = {
    favoriteImages: [],
    isReady: false,
  }

  componentWillMount = () => {
    let splitedImages = this.splitImagesIntoSubArray(this.props.favoriteImages, 3)
    this.setState({favoriteImages: splitedImages}, () => this.setState({isReady: true}))
  }

  splitImagesIntoSubArray = (arr, count) => {
    var newArray = []
    while (arr.length > 0) {
      newArray.push(arr.splice(0, count))
    }
    return newArray
  }

  render = () => {
    let { favoriteImages, isReady } = this.state
    let { renderImageThumbnail } = this
    if (isReady) {
      return(
        <View style={styles.container}>
          <ScrollView style={styles.gridContainer}>
            {favoriteImages.map(gridOfImages =>
              <View key={gridOfImages.length} style={{flexDirection: 'row'}}>
                {gridOfImages.map(image =>
                  <Button key={image.node.image.uri} transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
                    <Image source={{uri: image.node.image.uri }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
                    <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
                  </Button>
                )}
              </View>
            )}
          </ScrollView>

          <Button transparent style={styles.addButton}>
            <Icon name="ios-heart-outline" style={styles.icon}/>
            <Text style={styles.addText}>Add Favorites</Text>
          </Button>
        </View>
      )
    } else {
      return null
    }
  }
}

const styles = {
  container: {
    width: width,
    height: height * 0.85
  },
  addButton: {
    width: '50%',
    height: 50,
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  icon: {
    color: '#fff',
    marginRight: 8
  },
  addText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  },
  gridContainer: {
    width: width,
    height: height * 0.3,
    backgroundColor: 'lightgray',
    marginBottom: 24
  }
}
