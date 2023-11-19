import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MovieList from "./Components/Movie/MovieList";
import Celebrity from "./Components/Celebrity";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import NotFound from "./Components/NotFound";
import TV from "./Components/TV";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/celebrity" element={<Celebrity/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/TV" element={<TV/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;