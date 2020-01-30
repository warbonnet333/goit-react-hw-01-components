import React from "react";
import { Stat } from "../Stat/Stat";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt={name} />
      <p className="name">{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className="stats">
      {
        Object.keys(stats).map((item, index) =>
          <Stat label={item} quantity={stats[item]} key={index} />
        )
      }
    </ul>
  </div>
);

export default Profile;
