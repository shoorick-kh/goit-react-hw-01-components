import Profile from './components/Profile/Profile.js';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics.js';
import data from './components/Statistics/data.json';
import FriendList from './components/FriendList/FriendList.js';
import friends from './components/FriendList/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import transactions from './components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
