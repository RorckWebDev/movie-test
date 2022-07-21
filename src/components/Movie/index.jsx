import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./movie.module.css";

const Movie = ({ title, image, year, rating, genres, torrents, full }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.root} onClick={openModal}>
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
        {isOpen ? <Modal torrents={torrents} full={full} title={title} /> : ""}
      </ol>
    </div>
  );
};
export default Movie;
