import React from "react";
import { personalInfo } from "../data";
import { ContactLine } from "./ContactLine";

import styles from "./ContactSection.module.css";

export const ContactSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>{personalInfo.name}</h1>
      <p className="text-sm">{personalInfo.position}</p>
      <div className={styles.infoContainer}>
        {personalInfo.contacts.map(contact => (
          <ContactLine {...contact} />
        ))}
      </div>
    </div>
  );
};
