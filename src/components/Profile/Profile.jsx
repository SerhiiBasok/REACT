import css from "./Profile.module.css";

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
        <img className={css.image} src={css.avatar} alt={name} />
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
