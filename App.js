import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import MovieCard from './components/MovieCard'

export default class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: 'Terlalu Tampan',
        origin: 'Indonesia',
        rate: 7
      },
      {
        id: 2,
        title: 'Dragon Ball Z',
        origin: 'Japan',
        rate: 9
      },
      {
        id: 3,
        title: 'Alita Battle Angel',
        origin: 'US',
        rate: 9
      },
      {
        id: 4,
        title: 'Si Doel',
        origin: 'Indonesia',
        rate: 9
      },
      {
        id: 5,
        title: 'React',
        origin: 'Semarang',
        rate: 9
      },
    ]
  }

  render() {
    return (
      <View style={styles.main}>
        {
          this.state.movies.map(function(movie) {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                origin={movie.origin}
              />
            )
          })
        }
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
