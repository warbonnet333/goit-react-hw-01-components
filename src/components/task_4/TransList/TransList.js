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
      {transactions.map(item => (
          <TransItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
      ))}
    </tbody>
  </table>
);

TransList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default TransList;
