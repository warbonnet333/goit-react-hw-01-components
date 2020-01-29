import React from "react";
import styles from "./transItem.module.css";
import PropTypes from "prop-types";

const TransItem = ({ type, amount, currency }) => (
  <tr className={styles.trow}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string.isRequired
};

export default TransItem;
