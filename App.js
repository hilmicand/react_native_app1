/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';


export default class App extends Component {

  constructor(props){
    super(props);
    
    this.alert = this.alert.bind(this);
    
    this.state = {
      name : "" 
    };
  }
  alert(event){

    if(this.state.name != "") {
      Alert.alert('Mesaj', 
                'Selam ' + this.state.name, 
                [
                  {text: 'Tamam', onPress: () => console.log('Tamam a basildi....')},
                ], 
                {cancelable: false}, 
                );
    } else {
      Alert.alert(
        'Hata',
        'İsim boş bırakılamaz',
        [
          {text: 'Yeniden Dene', onPress: () => console.log("Kullanici yeniden deneyecek....")},
        ],
        {cancelable: false},
      );
    }
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hoşgeldiniz!</Text>
        <TextInput
          style={styles.textBox}
          placeholder='Adınız...'
          onChangeText={(name) => this.setState({name})}
          value={this.state.name} 
        />
        <Button 
          onPress={this.alert}
          title="Devam Et"
          style={styles.btn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  textBox: {
    height: 40,
    width: 250,
    borderWidth: 0.25,
    borderColor: '#000000',
    borderRadius: 7, 
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20
  },

  btn: {
    color: '#4286f4',
  }
});
