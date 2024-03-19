import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/FriendList.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import userData from "../userData.json";
import friendsData from "../friendListItem.json";
import transactionHistory from "../transactionData.json";

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
