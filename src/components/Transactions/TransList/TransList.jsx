import React from "react";
import TransItem from "../TransItem/TransItem";
import styles from "./transList.module.css";
import PropTypes from "prop-types";

const TransList = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.thead}>
      <tr className={styles.trow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </tbody>
  </table>
);

TransList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransList;
