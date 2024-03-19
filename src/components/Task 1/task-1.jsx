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
      <div className={css.avatar}>
        <img
          className={css.image}
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="User avatar"
        />
        <p className={css.name}> {name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.element}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>

        <li className={css.element}>
          <span>Views</span>
          <span>{views}</span>
        </li>

        <li className={css.element}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
