import React from "react";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>Vytautas Sugintas</h1>
        <p className="text-sm">Front End Engineer at 1stdibs</p>
        <div className={styles.infoContainer}>
          <p className={styles.infoLine}>
            <i className="icon" data-feather="map-pin"/>
            Lithuania, Vilnius
          </p>
          <p className={styles.infoLine}>
            <i className="icon" data-feather="mail"/>
            <a href="mailto:vytautas.sugintas@gmail.com">vytautas.sugintas@gmail.com</a>
          </p>
          <p className={styles.infoLine}>
            <i className="icon" data-feather="github"/>
            <a href="https://github.com/vytautassugintas">vytautassugintas</a>
          </p>
          <p className={styles.infoLine}>
            <i className="icon" data-feather="twitter"/>
            <a href="https://twitter.com/vytautasugintas">vytautasugintas</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
