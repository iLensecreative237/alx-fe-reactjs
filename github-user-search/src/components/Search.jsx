import { useState } from "react";
// 🔁 Rename import to match required name
import { fetchAdvancedUserData as fetchUserData } from "../services/githubService";

const Search = () => {
  // ... state code remains unchanged

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      // 🔁 Use fetchUserData here
      const data = await fetchUserData(username, location, minRepos);
      setUsers(data.items);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // ... rest of your component remains unchanged
};
// at the bottom of Search.jsx
export default Search;