import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class MovieCard extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: this.props.poster}}
        />
        <View style={styles.cardTextContainer}>
          <Text
            style={styles.cardTextTitle}
            numberOfLines={2}
          >{this.props.title}</Text>
          <Text style={styles.cardText}>{this.props.origin} / {this.props.rate}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 150-8,
    marginTop: 8,
    marginBottom: 16,
    backgroundColor: '#334366',
    padding: 8
  },
  cardImage: {
    alignSelf: 'flex-end',
    width: 100,
    height: 150,
  },
  cardTextContainer: {
    paddingLeft: 8,
    flex: 1
  },
  cardText: {
    color: '#fff',
  },
  cardTextTitle: {
    fontSize: 18,
    color: '#fff',
  }
})
