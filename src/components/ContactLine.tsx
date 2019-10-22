import React from "react";
import { ContactInfo } from "../types";
import styles from "./ContactLine.module.css";

export const ContactLine: React.FC<ContactInfo> = ({
  iconName,
  text,
  href
}) => {
  return (
    <p className={styles.infoLine}>
      <i className="icon" data-feather={iconName} />
      {href ? (
        <a rel="noopener noreferrer" target="_blank" href={href}>
          {text}
        </a>
      ) : (
        text
      )}
    </p>
  );
};
