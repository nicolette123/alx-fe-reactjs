import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import UserList from './components/UserList'
import { searchUsers } from './services/githubService'
import './index.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (term) => {
    if (!term) {
      setUsers([])
      return
    }
    setLoading(true)
    setError(null)
    try {
      const results = await searchUsers(term)
      setUsers(results)
    } catch (err) {
      setError(err.message || 'Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>GitHub User Search</h1>
      </header>

      <div style={{ marginTop: 16 }}>
        <div className="card">
          <SearchBar onSearch={handleSearch} />
        </div>

        {error && (
          <div style={{ marginTop: 12, color: 'crimson' }}>
            Error: {error}
          </div>
        )}

        {loading ? (
          <p style={{ marginTop: 12 }}>Loading...</p>
        ) : (
          <UserList users={users} />
        )}
      </div>
    </div>
  )
}

export default App
