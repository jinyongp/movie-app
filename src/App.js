import { Component } from "react";
import Movie from "./Movie";
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: null,
  };

  async getMovies() {
    const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(url);
    this.setState({ isLoading: false, movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          movies.map((movie) => <Movie key={movie.id} {...movie} />)
        )}
      </section>
    );
  }
}

export default App;
