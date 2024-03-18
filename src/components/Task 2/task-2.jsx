import "./task-2.scss";
import clsx from "clsx";

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>
          <img src={friend.avatar} alt="Avatar" width="48" />
          <p>{friend.name}</p>
          <p
            className={clsx({
              online: friend.isOnline === true,
              offline: friend.isOnline === false,
            })}
          >
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
