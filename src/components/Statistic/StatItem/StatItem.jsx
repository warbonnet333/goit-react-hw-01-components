import React from "react";
import styles from "./StatItem.module.css"
import randomColor from "../randomColor";

const StatItem = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

export default StatItem;
