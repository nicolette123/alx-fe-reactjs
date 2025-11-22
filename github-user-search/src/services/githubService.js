import axios from "axios";

const BASE_URL = "https://api.github.com";

// BASIC SEARCH — fetch a single GitHub user by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

// ADVANCED SEARCH — search multiple users with username, location, and minimum repos
export const getAdvancedUsers = async (formData, page = 1) => {
  const { username, location, repos } = formData;

  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>=${repos} `;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(
        query
      )}&page=${page}&per_page=10`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
};
