import { useState } from "react";
import Search from "./components/Search";
//import UserList from "./components/UserList"; // A new component to render users

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="max-w-xl mx-auto p-4">
      <Search onResults={setUsers} />
      <UserList users={users} />
    </div>
  );
};

export default App;