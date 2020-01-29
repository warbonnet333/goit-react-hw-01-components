import React from "react";
import styles from "./Stat.module.css";

export const Stat = ({ label, quantity }) => (
  <li className={styles.stat}>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{quantity}</span>
  </li>
);
