import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  let location = useLocation();
  let url = location.pathname;

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const currentMovie = movies.find((movi) => movi.url === url);
    setMovie(currentMovie);
  }, [movies, url]);
  return (
    <>
      {movie && (
        <motion.div
          variants={pageAnimation}
          exit="exit"
          initial="hidden"
          animate="show"
          className="movie-detail"
        >
          <div className="text">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </div>
          <div className="awards">
            {movie.awards.map((award) => (
              <div className="award" key={award.title}>
                <h3>{award.title}</h3>
                <div className="award-line"></div>
                <p>{award.description}</p>
              </div>
            ))}
          </div>
          <div className="award-img">
            <img src={movie.secondaryImg} alt=""></img>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default MovieDetail;
