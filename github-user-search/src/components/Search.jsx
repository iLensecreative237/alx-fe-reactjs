import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos);
      setUsers(data.items); // .items because GitHub returns { total_count, items: [...] }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-4 rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repositories"
          className="border p-2 rounded"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700" type="submit">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">Looks like we cant find the user</p>}

      <div className="mt-6 grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <p className="text-lg font-semibold">{user.login}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;