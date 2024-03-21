import "./FriendListItem.scss";
import FriendItem from "../FriendListItem/FriendItem.jsx";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className="friendList">
        {friends.map((friend) => (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
