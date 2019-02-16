import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MovieCard from './components/MovieCard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text>Hello World!</Text>
        <MovieCard
          title="Terlalu Tampan Z"
          origin="Indonesia"
        />
        <MovieCard
          title="Creed 2"
          origin="US"
        />
        <MovieCard
          title="Alita battle Angel"
          origin="US"
        />
        <MovieCard
          title="Simba"
          origin="other"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#8b8e93',
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
