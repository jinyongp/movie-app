import { Component } from "react";
import Movie from "../components/Movie";
import axios from "axios";
import "./Home.css";

class Home extends Component {
  state = {
    isLoading: true,
    movies: null,
  };

  constructor(props) {
    super(props);
    this.source = axios.CancelToken.source();
  }

  async getMovies() {
    const url = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(url, { cancelToken: this.source.token });
    this.setState({ isLoading: false, movies });
  }

  componentDidMount() {
    this.getMovies();
  }

  componentWillUnmount() {
    this.source.cancel("Component got unmounted!");
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
          <div className="movies">
            {movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
