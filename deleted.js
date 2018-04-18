import React, { Component } from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import { Button, Icon } from 'native-base'


const {width, height} = Dimensions.get('window')

const PLACEHOLDER = "https://www.westland.net/venice/images/birdseye.jpg"

export default class Deleted extends Component {
  render = () => {
    return(
      <View style={styles.container}>
        <View style={{width: width, height: height * 0.75, backgroundColor: 'lightgray', marginBottom: 24}}>

          <View style={{flexDirection: 'row'}}>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Button transparent style={{width: '30%', height: 108, margin: 8, marginRight: 4}}>
              <Image source={{uri: PLACEHOLDER }} style={{width: '100%', height: 108, borderWidth: 2, borderColor: 'grey', borderRadius: 2}}/>
              <Icon name="ios-checkmark-circle" style={{ position: 'absolute', left: '25%'}}/>
            </Button>
          </View>

        </View>
        <Button transparent style={styles.addButton}>
          <Icon name="ios-trash-outline" style={styles.icon}/>
          <Text style={styles.addText}>Delete Photos</Text>
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
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  icon: {
    color: '#fff',
    marginRight: 8,
    marginLeft: 24
  },
  addText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18
  }
}
