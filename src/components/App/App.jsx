import Profile from "../Task 1/task-1";
import FriendList from "../Task 2/task-2";
import TransactionHistory from "../Task 3/task-3";
import userData from "../userData.json";
import friendsData from "../friendsData.json";
import transactionHistory from "../transactionData.json";
// import css from "./task-1.module.css";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
};

export default App;
