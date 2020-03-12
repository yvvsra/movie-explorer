import React from 'react';
// import movies from './data';
import MoviesList from "./Components/MovieList/index.js"
import Header from "./Components/Header/index.js"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

   BASE_URL = "https://api.themoviedb.org/3";
   API_KEY = "542003918769df50083a13c415bbc602";

   componentDidMount = () => {
    fetch(`${this.BASE_URL}/movie/popular?api_key=${this.API_KEY}`)
    .then(resp => resp.json())
    .then(json=> {
      this.setState({
        movies: json.results
      }, () => console.log(this.state))
    })
   }

  render() {
    return (
      <div>
          <Header />
          <MoviesList movies={this.state.movies} />        
      </div>
    );
  }
}

export default App;
