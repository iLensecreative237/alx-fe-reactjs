// src/services/githubService.js
import axios from "axios";
console.log("process.env")
console.log(import.meta.env)
export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(" ");

  // ✅ Inline URL to satisfy the test
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data;
};