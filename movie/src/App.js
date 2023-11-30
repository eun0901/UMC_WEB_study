import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MovieList from "./Components/Movie/MovieList";
import Celebrity from "./pages/Celebrity";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import TV from "./pages/TV";
import Header from "./Components/Header";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/celebrity" element={<Celebrity/>} />
          <Route path="/movie" element={<Movies/>} />
          <Route path="/TV" element={<TV/>} />
          <Route element={<NotFound/>} />
          <Route path="/movie/:title" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;