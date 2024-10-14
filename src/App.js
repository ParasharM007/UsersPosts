import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import UserActivities from "./component/UserActivities";

function App() {
  const [data, setData] = useState(() => {
    try {
      const savedData = localStorage.getItem("userData");
      return savedData ? JSON.parse(savedData) : [];
    } catch (error) {
      console.error("Error parsing localStorage data: ", error);
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Home
              data={data}
              setData={setData}
              loading={loading}
              setLoading={setLoading}
            />
          }
          exact
          path="/"
        />
        <Route
          element={
            <UserActivities
              data={data}
              setData={setData}
              loading={loading}
              setLoading={setLoading}
            />
          }
          exact
          path="/user/:id"
        />
      </Routes>
    </Router>
  );
}

export default App;
