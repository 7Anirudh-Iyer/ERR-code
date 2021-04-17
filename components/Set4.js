import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

let Game = 1;
let Val1 = ['_', '_', '_', '_', '_', '_', '_','_','_','_'];
let Va1 = Val1.join(' ');
//NOM is abbreviation for No. of Mistakes.
let NOM = 0;
//the word is circumvent
//cases for image
function Case0() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm0.png')}
    />
  );
}

function Case1() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm1.png')}
    />
  );
}

function Case2() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm2.png')}
    />
  );
}

function Case3() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm3.png')}
    />
  );
}

function Case4() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm4.png')}
    />
  );
}

function Case5() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm5.png')}
    />
  );
}

function Case6() {
  return (
    <Image
      style={{ width: 200, height: 200, alignSelf: 'center' }}
      source={require('../hangmen/hm6.png')}
    />
  );
}

function ThePresentCase() {
  if (NOM == 0) {
    return <Case0 />;
  } else if (NOM == 1) {
    return <Case1 />;
  } else if (NOM == 2) {
    return <Case2 />;
  } else if (NOM == 3) {
    return <Case3 />;
  } else if (NOM == 4) {
    return <Case4 />;
  } else if (NOM == 5) {
    return <Case5 />;
  } else if (NOM == 6) {
    return <Case6 />;
  } else {
    return <Text style={{fontSize: 50,}}>You have lost</Text>;
  }
}

export default class G4 extends React.Component {
  constructor() {
    super();
    this.state = { inp: '' };
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('s5');
          }} style={{margin: 24, alignSelf: 'center'}}>
          <Text>Next Game</Text>
        </TouchableOpacity>
        <ThePresentCase />
        <Text> Number of Letters: 10</Text>
        <Text>
          Meaning: find a way around (an obstacle) or overcome (a problem or difficulty), typically in a clever and surreptitious way or deceive; outwit.
        </Text>
        <Text> </Text>

        <View>
          <TextInput
            style={{
              width: 110,
              backgroundColor: 'yellow',
              fontSize: 15,
              alignSelf: 'center',
              textAlign: 'center',
            }}
            value={Va1}
          />
          <Text> </Text>
          <TextInput
            style={{
              backgroundColor: 'yellow',
              fontSize: 15,
              alignSelf: 'center',
            }}
            placeholder="Guess Word or Letter"
            onChangeText={(abc) => {
              this.setState({ inp: abc });
            }}
          />
          <Text> </Text>
          <TouchableOpacity
            onPress={() => {
              if (NOM < 7) {
                if (this.state.inp == 'circumvent') {
                  alert('Well done');
                  Va1 = 'circumvent';
                }
                if (Va1 == 'circumvent') {
                  alert('Well done');
                } else if (this.state.inp == 'c') {
                  Val1[0] = 'c';
                  Val1[3] = 'c'
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'i') {
                  Val1[1] = 'i';
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'r') {
                  Val1[2] = 'r';
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'u') {
                  Val1[4] = 'u';
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'm') {
                  Val1[5] = 'm';
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'v'){
                  Val1[6] = 'v'
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'e'){
                  Val1[7] = 'e'
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 'n'){
                  Val1[8] = 'n'
                  Va1 = Val1.join(' ');
                } else if (this.state.inp == 't'){
                  Val1[9] = 't'
                  Va1 = Val1.join(' ');
                } else {
                  NOM += 1;
                  console.log(NOM);
                }
              }
              if (NOM > 6) {
                alert('You have lost');
              }
            }}
            style={{ backgroundColor: 'cyan', alignSelf: 'center' }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
        <Text> </Text>
      </View>
    );
  }
}
