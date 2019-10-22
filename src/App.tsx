import React from "react";

import { ContactSection } from "./components/ContactSection";

import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <div className={styles.page}>
      <ContactSection />
    </div>
  );
};

export default App;
