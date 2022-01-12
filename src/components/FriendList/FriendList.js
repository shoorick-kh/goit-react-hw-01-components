import FriendItem from '../FriendItem/FriendItem';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      <FriendItem friends={friends} />
    </ul>
  );
}
