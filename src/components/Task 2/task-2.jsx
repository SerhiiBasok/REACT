import "./task-2.scss";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <div className="app-container">
      <ul className="friendList">
        {friends.map((friend) => (
          <li className="friendElem" key={friend.id}>
            <img
              className="friendImg"
              src={friend.avatar}
              alt="Avatar"
              width="48"
            />
            <p className="friendName">{friend.name}</p>
            <p
              className={clsx({
                online: friend.isOnline === true,
                offline: friend.isOnline === false,
              })}
            >
              {friend.isOnline ? "Online" : "Offline"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
