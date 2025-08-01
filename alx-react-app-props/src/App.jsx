import UserContext from './components/UserContext';
import UserProfile from './components/UserProfile';

function App() {
  const userData = {
    name: 'Alice',
    age: '25',
    bio: 'Loves hiking and photography',
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;