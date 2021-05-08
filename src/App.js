import './App.css';
import MovieRows from "./components/MovieRows/MovieRows";
import config from "./requests";
import Banner from "./components/Banner/Banner";
import './App.css'
import Navbar from "./components/Navbar/Navbar";

function App() {
  const {
      fetchNetflixOriginals,
      fetchTrending,
      fetchTopRated,
      fetchActionMovies,
      fetchComedyMovies,
      fetchHorrorMovies,
      fetchRomanceMovies,
      fetchDocumentaries
  } = config;

  return (
      <div className="App">
          <Navbar />
          <Banner />
          <MovieRows isLargeRow title="Netflix Originals" fetchUrl={fetchNetflixOriginals}/>
          <MovieRows title="Trending Now" fetchUrl={fetchTrending}/>
          <MovieRows title="Top Rated" fetchUrl={fetchTopRated}/>
          <MovieRows title="Action Movies" fetchUrl={fetchActionMovies}/>
          <MovieRows title="Comedy Movies" fetchUrl={fetchComedyMovies}/>
          <MovieRows title="Horror Movies" fetchUrl={fetchHorrorMovies}/>
          <MovieRows title="Romance Movies" fetchUrl={fetchRomanceMovies}/>
          <MovieRows title="Documentaries" fetchUrl={fetchDocumentaries}/>
      </div>
  );
}

export default App;
