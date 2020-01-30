import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png", name = "Friend Name", isOnline = false }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.onLine : styles.offLine}></span>
    <img className={styles.avatar} src={avatar} alt={name} />
    <p className={styles.name}>{name}</p>
  </li>
);



FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
