import { useEffect, useState } from "react";

import { useDebounce } from "./components/hooks";
import SearchBar from "./components/SearchBar";
import { fetchUsers, User } from "./components/utils";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const users = await fetchUsers(debouncedSearch);
      setUsers(users);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  return (
    <div className="App">
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

export default App;
