import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Basic user fetch (Task 1)
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    return { message: "Not Found" };
  }
};

/**
 * Advanced user search (Task 2)
 * q = username + location + repos filters
 */
export const getAdvancedUsers = async (formData, page = 1) => {
  const { username, location, repos } = formData;

  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (repos) query += `repos:>=${repos}+`;

  if (!query) query = "type:user";

  try {
    const response = await axios.get(
      `${BASE_URL}/search/users?q=${query}&page=${page}&per_page=10`
    );
    return response.data;
  } catch (error) {
    return { items: [], total_count: 0 };
  }
};
