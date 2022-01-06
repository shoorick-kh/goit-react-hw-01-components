import Profile from './components/profile/Profile.js';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics.js';
import data from './components/statistics/data.json';
import FriendList from './components/friends/FriendList.js';
import friends from './components/friends/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory.js';
import transactions from './components/transactions/transactions.json';

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
