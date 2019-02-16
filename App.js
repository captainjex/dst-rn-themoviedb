import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MovieCard from './components/MovieCard'
import axios from 'axios'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300'

export default class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount () {
    this.getMovies()
  }

  getMovies = () => {
    axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=6325d8c52adcf9fcec26157c2d4400a7&language=en-US&page=1')
      .then(response => {
        const movies = response.data.results.map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            origin: movie.original_language,
            poster: IMAGE_URL + movie.poster_path,
            rate: movie.vote_average
          }
        })

        this.setState({
          movies: movies
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  removeMovie = (id) => {
    const movies = this.state.movies.filter(item => item.id !== id)
    this.setState({
      movies: movies
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          {
            this.state.movies.map((movie) => {
              return (
                <TouchableOpacity
                  key={movie.id}
                  onLongPress={ () => { this.removeMovie(movie.id) }}
                >
                  <MovieCard
                    poster={movie.poster}
                    title={movie.title}
                    origin={movie.origin}
                    rate={movie.rate}
                  />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0e131c',
    padding: 16,
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
});
