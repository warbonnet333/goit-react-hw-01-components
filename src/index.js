import React from "react";
import ReactDOM from "react-dom";
//* ------------profile-----------*//
import Profile from "./components/task_1/Profile/Profile";
import user from "./components/task_1/user.json";
//* ------------statistic-----------*//
import Statistic from "./components/task_2/StatList/Statistic";
import statisticsInfo from "./components/task_2/statistical-data.json";
//* ------------friendLsit-----------*//
import FriendList from "./components/task_3/FriendList/FriendList";
import friendsInfo from "./components/task_3/friendList.json";
//* ------------transactions-----------*//
import TransList from "./components/task_4/TransList/TransList";
import transactionsInfo from "./components/task_4/transaction.json";

const App = () => (
  <>
    <Profile user={user} />
    <Statistic stats={statisticsInfo} />
    <FriendList friends={friendsInfo} />
    <TransList transactions={transactionsInfo} />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
