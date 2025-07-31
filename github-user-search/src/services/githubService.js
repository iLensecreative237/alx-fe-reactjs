// src/services/githubService.js
import axios from 'axios';

const token = import.meta.env.VITE_GITHUB_TOKEN; // optional if you're using a token

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {}
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};