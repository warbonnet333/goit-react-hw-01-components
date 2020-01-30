import React from "react";
import Profile from "./components/UserProfile/Profile/Profile";
import user from "./components/UserProfile/user.json";
import Statistic from "./components/Statistic/StatList/Statistic";
import statisticsInfo from "./components/Statistic/statistical-data.json";
import FriendList from "./components/Friends/FriendList/FriendList";
import friendsInfo from "./components/Friends/friendList.json";
import TransList from "./components/Transactions/TransList/TransList";
import transactionsInfo from "./components/Transactions/transaction.json";

const App = () => (
  <>
    <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistic stats={statisticsInfo} />
    <FriendList friends={friendsInfo} />
    <TransList transactions={transactionsInfo} />
  </>
);

export default App


