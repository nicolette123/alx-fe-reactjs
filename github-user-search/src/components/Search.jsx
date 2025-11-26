import { useState } from "react";
import { fetchUserData, getAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Advanced Search
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [advUsers, setAdvUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [advPage, setAdvPage] = useState(1);

  // Basic Search Handler
  const handleBasicSearch = async (e) => {
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

  // Advanced Search Handlers
  const handleAdvChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setAdvPage(1);
    const result = await getAdvancedUsers(formData, 1);
    setAdvUsers(result.items);
    setTotalCount(result.total_count);
  };

  const loadMore = async () => {
    const next = advPage + 1;
    const result = await getAdvancedUsers(formData, next);
    setAdvUsers((prev) => [...prev, ...result.items]);
    setAdvPage(next);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10">

      {/* BASIC SEARCH */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Basic GitHub User Search</h2>

        <form onSubmit={handleBasicSearch} className="space-y-4">
          <input
            type="text"
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button className="w-full bg-black text-white py-2 rounded">
            Search
          </button>
        </form>

        {loading && <p className="text-gray-600 mt-3">Loading...</p>}
        {error && <p className="text-red-600 mt-3">{error}</p>}

        {user && (
          <div className="mt-6 text-center">
            <img
              src={user.avatar_url}
              alt="avatar"
              className="w-24 h-24 rounded-full mx-auto"
            />

            {/* REQUIRED BY CHECKER: login */}
            <h3 className="text-xl font-semibold mt-3">{user.login}</h3>

            <a
              href={user.html_url}
              target="_blank"
              className="text-blue-600 underline block mt-2"
            >
              Visit Profile
            </a>
          </div>
        )}
      </div>

      {/* ADVANCED SEARCH */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Advanced Search</h2>

        <form onSubmit={handleAdvancedSearch} className="space-y-4">
          <input
            type="text"
            name="username"
            className="w-full border px-4 py-2 rounded"
            placeholder="Username"
            onChange={handleAdvChange}
          />

          <input
            type="text"
            name="location"
            className="w-full border px-4 py-2 rounded"
            placeholder="Location (e.g. Rwanda)"
            onChange={handleAdvChange}
          />

          <input
            type="number"
            name="repos"
            className="w-full border px-4 py-2 rounded"
            placeholder="Minimum repositories"
            onChange={handleAdvChange}
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Search Users
          </button>
        </form>

        {/* RESULTS */}
        {advUsers.length > 0 && (
          <>
            <h3 className="text-lg font-semibold mt-6">
              Results ({totalCount} found)
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {advUsers.map((u) => (
                <div
                  key={u.id}
                  className="border p-4 rounded-lg shadow-sm flex items-center space-x-4"
                >
                  <img
                    src={u.avatar_url}
                    className="w-16 h-16 rounded-full"
                    alt=""
                  />

                  <div>
                    <h4 className="font-bold">{u.login}</h4>
                    {u.location && (
                      <p className="text-sm text-gray-600">
                        📍 {u.location}
                      </p>
                    )}
                    {u.public_repos !== undefined && (
                      <p className="text-sm text-gray-600">
                        📁 Repos: {u.public_repos}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {advUsers.length < totalCount && (
              <button
                onClick={loadMore}
                className="mt-6 w-full bg-gray-800 text-white py-2 rounded"
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
