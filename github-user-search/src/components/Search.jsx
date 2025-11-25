import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    const data = await fetchUserData(username);

    if (data?.message === "Not Found") {
      setError("Looks like we cant find the user");
    } else {
      setUser(data);
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{ width: "100px", borderRadius: "50%" }}
          />

         
          <h3>Username: {user.login}</h3>

        
          {user.name && <p>Name: {user.name}</p>}

          <a href={user.html_url} target="_blank">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
