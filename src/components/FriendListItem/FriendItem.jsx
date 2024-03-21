import "./FriendListItem.scss";
import clsx from "clsx";

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friendElem">
      <img className="friendImg" src={avatar} alt="Avatar" />
      <p className="friendName">{name}</p>
      <p className={clsx("status", { online: isOnline, offline: !isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendItem;
