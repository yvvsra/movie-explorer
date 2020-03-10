import React from 'react';
import movies from './data';
import MoviesList from "./Components/MovieList/index.js"
import Header from "./Components/Header/index.js"

class App extends React.Component {
  render() {
    return (
      <div>
          <Header />
          <MoviesList list={movies.results} />        
      </div>
    );
  }
}

export default App;
