import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

export default function FriendItem({ friend }) {
  return (
    <>
      <li key={friend.id} className={s.item}>
        {friend.isOnline ? (
          <span className={s.isOnline}></span>
        ) : (
          <span className={s.isOffline}></span>
        )}
        <img
          src={friend.avatar}
          alt="User avatar"
          width="48"
          className={s.image}
        />
        <p className={s.name}>{friend.name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
