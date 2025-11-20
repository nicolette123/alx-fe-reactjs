import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(term.trim())
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8 }}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search GitHub users (e.g. torvalds)"
        style={{
          flex: 1,
          padding: '0.6rem 0.75rem',
          borderRadius: 6,
          border: '1px solid #e5e7eb',
        }}
        aria-label="search"
      />
      <button
        type="submit"
        style={{
          padding: '0.6rem 0.9rem',
          borderRadius: 6,
          border: 'none',
          background: '#111827',
          color: 'white',
        }}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
