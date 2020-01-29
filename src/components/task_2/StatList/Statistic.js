import React from "react";
import styles from "./Statistic.module.css";

import StatItem from "../StatItem/StatItem";
import PropTypes from "prop-types";

const Statistic = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map((item, index) => (
        <StatItem label={item.label} percentage={item.percentage} key={index}/>
      ))}
    </ul>
  </section>
);

Statistic.defaultProps = {
  title: "Upload stats"
};

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired
};

export default Statistic;
