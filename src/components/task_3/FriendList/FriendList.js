import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(item => (
      <FriendListItem
        avatar={item.avatar}
        name={item.name}
        isOnline={item.isOnline}
        key={item.id}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};

export default FriendList;
