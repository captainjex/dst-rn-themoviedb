import React from 'react'
import { View, Text } from 'react-native'

export default class MovieCard extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.origin} /4</Text>
      </View>
    )
  }
}
