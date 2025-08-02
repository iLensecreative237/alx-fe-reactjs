// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchAdvancedUserData = async (username, location, minRepos) => {
  const queryParts = [];

  if (username) queryParts.push(`${username} in:login`);
  if (location) queryParts.push(`location:${location}`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(" ");

  const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
    },
  });

  return response.data; // response includes total_count and items (array of users)
};