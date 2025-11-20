import axios from 'axios'

const GITHUB_API = 'https://api.github.com'

const token = import.meta.env.VITE_APP_GITHUB_API_KEY || ''

const axiosInstance = axios.create({
  baseURL: GITHUB_API,
  headers: token ? { Authorization: `token ${token}` } : {},
})

/**
 * Search users by term using GitHub Search API
 * Returns an array of user objects (items)
 */
export async function searchUsers(q) {
  const params = {
    q,
    per_page: 30,
  }

  const resp = await axiosInstance.get('/search/users', { params })
  // return the items array
  return resp.data && resp.data.items ? resp.data.items : []
}
