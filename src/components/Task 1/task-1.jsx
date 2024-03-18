import css from "./task-1.module.css";

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
       {" "}
      <div className={css.avatar}>
            <img src={avatar} alt="User avatar" />    <p>{name}</p>   {" "}
        <p>@{tag}</p>    <p>{location}</p> {" "}
      </div>
       {" "}
      <ul className={css.list}>
           {" "}
        <li className={css.element}>
                <span>Followers</span>      <span>{followers}</span>   {" "}
        </li>
           {" "}
        <li className={css.element}>
                <span>Views</span>      <span>{views}</span>   {" "}
        </li>
           {" "}
        <li className={css.element}>
                <span>Likes</span>      <span>{likes}</span>   {" "}
        </li>
         {" "}
      </ul>
    </div>
  );
};

export default Profile;
