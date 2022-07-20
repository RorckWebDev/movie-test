import { Component } from "react";
import Movie from "./components/Movie";
import axios from "axios";
// function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <div className="App">
//       <button onClick={() => setCount(count - 1)}>минус</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(count + 1)}>плюс</button>
//     </div>
//   );
// }
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
      <div>
        {isloading ? (
          "получаю данные"
        ) : (
          <div className="movie__app">
            {movies.map((e) => (
              <Movie
                key={e.id}
                title={e.title}
                image={e.medium_cover_image}
                year={e.year}
                rating={e.rating}
                genres={e.genres}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default App;
