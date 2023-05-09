import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./components/SocialCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://randomuser.me/api/?results=10");
      const userData = (await response.json()).results;
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = (e) => {
    const filteredUsers = allUsers.filter((user) =>
      `${user.name.first} ${user.name.last}`
        .toLowerCase()
        .includes(e.target.value)
    );

    setUsers(filteredUsers);
  };


  return (
    <div className="App">
      <h1>Social Cards</h1>
      <div className="search">
        <input
          className="searchBox"
          type="text"
          placeholder="Search..."
          onInput={filterCards}
        />
      </div>

      <div className="cardsContainer">
        {users.map((user, index) => (
          <SocialCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
