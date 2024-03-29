import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movies, setMovie] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);

  const movieNameHandler = (name) => {
    setMovieName(name);
  }
  const pageChangeHandler = (page_number) => {
    setPage(page_number);
  }

  useEffect(
    () => {

      let API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
      if (movieName.length != 0) {
        API_URL = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${movieName}`;
      }
      setLoader(true);
      axios.get(API_URL)
        .then(
          (success) => {
            console.log(success.data.results);
            setMovie(success.data.results);
          }
        ).catch(
          (error) => {

          }
        ).finally(
          () => {
            setLoader(false);
          }
        )

    },
    [movieName, page]
  )


  return (
    <>

      <Input movieName={movieName} page={page} pageChangeHandler={pageChangeHandler} movieNameHandler={movieNameHandler} />
      <div className="container">
        {
          loader ?
            <div className="skeleton-loader">
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
              <div className="skeleton-item" />
            </div>
            :
            <div className="row">
              {
                movies.map(
                  (movie) => {
                    return (
                      <div className="col-lg-3 col-6 mb-2">
                        <img width={"100%"} height={400}
                          className="rounded shadow"
                          src={
                            movie.poster_path
                              ? "https://image.tmdb.org/t/p/w1280" + movie.poster_path
                              : "images/image-not-found.jpg"
                          } alt="" />
                      </div>
                    )
                  }
                )
              }
            </div>
        }
      </div>
    </>
  );
}

export default App;
