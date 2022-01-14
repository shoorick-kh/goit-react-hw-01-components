import Profile from './components/profile/Profile.js';
import user from './data/user.json';
import Statistics from './components/statistics/Statistics.js';
import data from './data/data.json';
import FriendList from './components/friendList/FriendList.js';
import friends from './data/friends.json';
import TransactionHistory from './components/transactionHistory/TransactionHistory.js';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
