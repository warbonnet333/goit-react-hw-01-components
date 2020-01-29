import React from "react";
import { Stat } from "../Stat/Stat";
import styles from "./Profile.module.css";

const Profile = ({ user }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={user.avatar} alt={user.name} />
      <p className="name">{user.name}</p>
      <p className={styles.tag}>@{user.stats.followers}</p>
      <p className={styles.location}>Salvador, Brasil</p>
    </div>
    <ul className="stats">
      <Stat
        label={Object.keys(user.stats)[0]}
        quantity={Object.values(user.stats)[0]}
      />
      <Stat
        label={Object.keys(user.stats)[1]}
        quantity={Object.values(user.stats)[1]}
      />
      <Stat
        label={Object.keys(user.stats)[2]}
        quantity={Object.values(user.stats)[2]}
      />
    </ul>
  </div>
);

export default Profile;
