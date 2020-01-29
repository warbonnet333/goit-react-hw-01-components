import React from "react";
import styles from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  let spanClass = isOnline ? styles.onLine : styles.offLine;
  return (
    <li className={styles.item}>
      <span className={spanClass}></span>
      <img className={styles.avatar} src={avatar} alt={name} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  isOnline: false,
  name: "Name"
};

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
