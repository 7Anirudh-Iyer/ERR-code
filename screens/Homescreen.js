import * as React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'
import Constants from 'expo-constants';

export default class Home extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('s1');
          }}>
          <Text style={styles.paragraph}>Hangman</Text>
        </TouchableOpacity>
        <Text style={styles.mute}>
          Press the button labelled Hangman to proceed to the game
        </Text>
        <Text style={styles.paragraph}>Instructions</Text>
        <Text style={styles.mute}>
          In order to move to the next game press the same hangman button.
        </Text>
        <Text style={styles.mute}>
          The result of your answer will only appear after to delete your
          first answer.
        </Text>
        <Text style={styles.mute}>
          Try and guess the word using the meaning provided.
        </Text>
        <Text style={styles.mute}>
          In the place provided always write in small letters
        </Text>
        <Text style={styles.mute}>Enjoy!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'rgb(0,100,205)',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  mute: {
    margin: 4,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'yellow',
  },
});