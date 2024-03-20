import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendListItem/FriendListItem.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import userData from "../UserData.json";
import friendsData from "../FriendListItem.json";
import transactionHistory from "../TransactionData.json";
import FriendListItem from "../FriendListItem/FriendListItem.jsx";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem friends={friendsData} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
};

export default App;
