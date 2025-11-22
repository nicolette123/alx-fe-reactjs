import { useState } from "react";
import { getAdvancedUsers } from "../services/githubService";

const AdvancedSearch = () => {
  const [formData, setFormData] = useState({
    username: "",
    location: "",
    repos: "",
  });

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    fetchUsers(1, true);
  };

  const fetchUsers = async (currentPage, reset = false) => {
    setLoading(true);
    const response = await getAdvancedUsers(formData, currentPage);

    if (reset) {
      setUsers(response.items);
    } else {
      setUsers((prev) => [...prev, ...response.items]);
    }

    setTotalCount(response.total_count);
    setLoading(false);
  };

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(nextPage);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Advanced GitHub User Search</h2>

      {/* SEARCH FORM */}
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md p-6 rounded-lg space-y-4"
      >
        <div>
          <label className="block font-semibold mb-1">Username</label>
          <input
            type="text"
            name="username"
            placeholder="e.g. octocat"
            value={formData.username}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            placeholder="e.g. Rwanda"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Minimum Repositories</label>
          <input
            type="number"
            name="repos"
            placeholder="e.g. 10"
            value={formData.repos}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Searching..." : "Search Users"}
        </button>
      </form>

      {/* RESULTS */}
      <div className="mt-8">
        {users.length > 0 && (
          <h3 className="text-xl font-semibold mb-4">
            Results ({totalCount} users found)
          </h3>
        )}

        <div className="grid md:grid-cols-2 gap-4">
          {users.map((user) => (
            <a
              key={user.id}
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{user.login}</h4>
                  {user.location && (
                    <p className="text-sm text-gray-600">📍 {user.location}</p>
                  )}
                  {user.public_repos !== undefined && (
                    <p className="text-sm text-gray-600">
                      📁 Repositories: {user.public_repos}
                    </p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* LOAD MORE BUTTON */}
        {users.length > 0 && users.length < totalCount && (
          <div className="text-center mt-6">
            <button
              onClick={loadMore}
              className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedSearch;
