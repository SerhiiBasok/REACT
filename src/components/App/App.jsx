import Profile from "../Profile/Profile.jsx";
import FriendList from "../FriendList/Friend-list.jsx";
import TransactionHistory from "../TransactionHistory/TransactionHistory.jsx";
import userData from "../UserData.json";
import friendsData from "../FriendListItem.json";
import transactionHistory from "../TransactionData.json";

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
