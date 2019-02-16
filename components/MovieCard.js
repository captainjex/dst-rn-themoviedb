import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class MovieCard extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: 'https://image.tmdb.org/t/p/w300/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg'}}
        />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>{this.props.title}</Text>
          <Text style={styles.cardText}>{this.props.origin} /4</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 130,
    marginBottom: 16,
    backgroundColor: '#334366',
    padding: 8
  },
  cardImage: {
    width: 100
  },
  cardTextContainer: {
    paddingLeft: 8
  },
  cardText: {
    color: '#fff',
  }
})
