import { useState } from "react";
import { fetchAdvancedUserData as fetchUserData } from "../services/githubService";

const Search = ({ onResults }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username, location, minRepos);
      onResults(data.items); // 👈 Pass results to parent
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Minimum Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error fetching users.</p>}
    </form>
  );
};

export default Search;