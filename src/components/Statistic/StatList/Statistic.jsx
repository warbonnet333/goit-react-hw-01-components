import React from "react";
import styles from "./Statistic.module.css";
import StatItem from "../StatItem/StatItem";
import PropTypes from "prop-types";
const shortid = require('shortid');


const Statistic = ({ title = "Upload stats", stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      {stats.map(({ label, percentage }) => (
        <StatItem label={label} percentage={percentage} key={shortid.generate()} />
      ))}
    </ul>
  </section>
);

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
};

export default Statistic;
