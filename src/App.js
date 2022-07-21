import { Component } from "react";
import Movie from "./components/Movie";
import RangeInput from "./components/Filter/Range";
import axios from "axios";

class App extends Component {
  state = {
    isloading: true,
    movies: [],
  };

  getMoviesArr = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({ movies, isloading: false });
  };
  componentDidMount() {
    this.getMoviesArr();
  }
  render() {
    const { isloading, movies } = this.state;
    console.log(movies);
    return (
      <div className="app">
        <section className="filter">
          <RangeInput />
        </section>
        <section className="movie__app">
          {isloading ? (
            "получаю данные"
          ) : (
            <>
              {movies.map((e) => (
                <Movie
                  key={e.id}
                  title={e.title}
                  image={e.medium_cover_image}
                  year={e.year}
                  rating={e.rating}
                  genres={e.genres}
                  full={e.description_full}
                  torrents={e.torrents}
                />
              ))}
            </>
          )}
        </section>
      </div>
    );
  }
}
export default App;
