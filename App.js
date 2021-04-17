import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import G1 from './components/Set1.js';
import G2 from './components/Set2.js';
import G3 from './components/Set3.js';
import G4 from './components/Set4.js';
import G5 from './components/Set5.js';
import Home from './screens/Homescreen'
import { Card } from 'react-native-paper';
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

let C = createSwitchNavigator({
  s0: Home,
  s1: G1,
  s2: G2,
  s3: G3,
  s4: G4,
  s5: G5,
})

let Complex = createAppContainer(C)

let GameValue = 'start';
let Set = 5

export default class App extends React.Component{
  render(){
    return(
      <View>
        <Complex />
      </View>
    )
  }
}
