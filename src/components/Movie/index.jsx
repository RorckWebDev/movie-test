import React from "react";
import styles from "./movie.module.css";

const Movie = ({ title, image, year, rating, genres }) => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={image} alt={title} />
      <span className={styles.title}>{title}</span>
      <div className={styles.info}>
        <span className={styles.year}>
          <span>Year: </span> {year}
        </span>
        <span className={styles.rating}>{rating}</span>
        <span>Genres:</span>
      </div>
      <ol className={styles.genres}>
        {genres.map((e, index) => {
          return <li key={index}>{e}</li>;
        })}
      </ol>
    </div>
  );
};
export default Movie;
