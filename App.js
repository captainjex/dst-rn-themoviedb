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
        poster: 'https://image.tmdb.org/t/p/w300/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg',
        rate: 7
      },
      {
        id: 2,
        title: 'Dragon Ball Z',
        origin: 'Japan',
        poster: 'https://image.tmdb.org/t/p/w300/7xfWyoz4SF5LHZ713eMtC2aZ0lT.jpg',
        rate: 9
      },
      {
        id: 3,
        title: 'Alita Battle Angel',
        origin: 'US',
        poster: 'https://image.tmdb.org/t/p/w300/72Xk4cjiKy74AINaJ6T0HhRulLz.jpg',
        rate: 9
      },
      {
        id: 4,
        title: 'Si Doel',
        origin: 'Indonesia',
        poster: 'https://image.tmdb.org/t/p/w300/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg',
        rate: 9
      },
      {
        id: 5,
        title: 'React',
        origin: 'Semarang',
        poster: 'https://image.tmdb.org/t/p/w300/6EILpfK4c1ekAUTGo9ApU6s2Lgz.jpg',
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
                poster={movie.poster}
                title={movie.title}
                origin={movie.origin}
                rate={movie.rate}
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
