import "./App.css";

import React, { useState } from "react";

function App() {
  const data = [
    {
      id: 1,
      name: "John Smith",
    },
    {
      id: 2,
      name: "Jane Smith",
    },
    {
      id: 3,
      name: "Joe Shmoe",
    },
  ];
  const [filteredData, setFilteredData] = useState(data);

  const search = (e) =>
    setFilteredData(data.filter((item) => item.name.includes(e.target.value)));

  return (
    <div className="App">
      <h1>Search example</h1>
      <input type="text" placeholder="Search" onKeyUp={search} />
      <ul>
        {filteredData.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
