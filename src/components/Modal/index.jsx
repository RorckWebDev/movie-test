import React from "react";
import styles from "./modal.module.css";

const Modal = ({ torrents, full, title }) => {
  return (
    <div className={styles.root}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.full}>{full.slice(0, 380)} ...</p>
      <ul className={styles.list}>
        {torrents.map((el, index) => {
          return (
            <li key={index}>
              <a href={el.url} className={styles.link}>
                {el.quality}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Modal;
