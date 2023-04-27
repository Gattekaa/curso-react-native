import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

class App extends Component{
  render() {
    return(
      <SafeAreaView>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>
        <Text style={{color: '#ff0000'}}>Sujeito Programador</Text>
        <Jobs largura={500} altura={200} fulano="Steve Jobs" />
      </SafeAreaView>
    )
  }
}

class Jobs extends Component{
  render(){
    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <View>
        <Image source={{ uri: img }} style={{width: this.props.largura, height: this.props.altura}} />
        <Text>{this.props.fulano}</Text>
      </View>

    )
  }
}

export default App;

