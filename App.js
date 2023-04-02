import React, { Component } from "react"
import { View } from "react-native"
import Header from "./src/components/Header"
import Post from "./src/components/Post"
import MenuNavigator from "./src/Navigator"
import Feed from "./src/screens/Feed"
import { registerRootComponent } from "expo"


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MenuNavigator />
      </View>
    )
  }
}
