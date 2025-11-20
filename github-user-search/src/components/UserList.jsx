import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users = [] }) => {
  if (!users || users.length === 0) {
    return <p style={{ marginTop: 12 }}>No users to display.</p>
  }

  return (
    <div className="user-grid">
      {users.map((u) => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  )
}

export default UserList
