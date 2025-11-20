import React from 'react'

const UserCard = ({ user }) => {
  return (
    <div className="card" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <img
        src={user.avatar_url}
        alt={user.login}
        style={{ width: 64, height: 64, borderRadius: '50%' }}
      />
      <div style={{ flex: 1 }}>
        <a href={user.html_url} target="_blank" rel="noreferrer" style={{ color: '#111827', fontWeight: 600 }}>
          {user.login}
        </a>
        {user.type && <div style={{ color: '#6b7280', fontSize: 13 }}>{user.type}</div>}
      </div>
      <div>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          View
        </a>
      </div>
    </div>
  )
}

export default UserCard
