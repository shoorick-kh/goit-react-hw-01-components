import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendList({ friends }) {
  return (
    <ul className="friend__list">
      {friends.map(friend => (
        <li key={friend.id} className="friend__item">
          {friend.isOnline ? (
            <span className="isOnline">Online</span>
          ) : (
            <span className="isOffline">Offline</span>
          )}
          <img
            src={friend.avatar}
            alt="User avatar"
            width="48"
            className="friend__image"
          />
          <p className="friend__name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
