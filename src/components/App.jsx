import React from "react";
import Profile from "./UserProfile/Profile/Profile";
import user from "./UserProfile/user.json";
import Statistic from "./Statistic/StatList/Statistic";
import statisticsInfo from "./Statistic/statistical-data.json";
import FriendList from "./Friends/FriendList/FriendList";
import friendsInfo from "./Friends/friendList.json";
import TransList from "./Transactions/TransList/TransList";
import transactionsInfo from "./Transactions/transaction.json";

const App = () => (
  <>
    <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistic stats={statisticsInfo} />
    <FriendList friends={friendsInfo} />
    <TransList transactions={transactionsInfo} />
  </>
);

export default App


