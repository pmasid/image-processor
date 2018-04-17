import React, { Component } from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import { Button, Icon } from 'native-base'

const {width, height} = Dimensions.get('window')

const PLACEHOLDER = "https://www.westland.net/venice/images/birdseye.jpg"

export default class Favorites extends Component {

  state = {}

  render = () => {
    return(
      <View style={styles.container}>
        <View style={{width: width, height: height * 0.75, backgroundColor: 'lightgray', marginBottom: 24}}>

          <View style={{flexDirection: 'row'}}>
            <Button transparent style={{width: 100, height: 100, margin: 8}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: 100, height: 100, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
            <Button transparent style={{width: 100, height: 100, margin: 8}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: 100, height: 100, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
            <Button transparent style={{width: 100, height: 100, margin: 8}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: 100, height: 100, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
          </View>

        </View>
        <Button transparent style={styles.addButton}>
          <Icon name="ios-heart-outline" style={styles.icon}/>
          <Text style={styles.addText}>Add Favorites</Text>
        </Button>
      </View>
    )
  }
}

const styles = {
  container: {
    width: width,
    height: height
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
  }
}
