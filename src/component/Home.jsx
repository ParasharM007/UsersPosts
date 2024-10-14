import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import "./Home.css";
import Loading from "./loading.gif";

function Home({ data, setData, loading, setLoading }) {
  const userData = async () => {
    try {
      setLoading(true);
      const temp = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const Data = await temp.json();
      setData(Data);

      setLoading(false);
    } catch (err) {
      console.log("Error " + err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    userData();
  }, []);
  useEffect(() => {
    if (data) {
      localStorage.setItem("userData", JSON.stringify(data));
    }
  }, [data]);
  console.log("Type of data is " + typeof data);
  console.log(data);
  return (
    <div className="main-container">
      <h1 className="heading">Users Dashboard</h1>
      <hr />
      <div className="container">
        {loading ? <img src={Loading} /> : <UserProfile data={data} />}
      </div>
    </div>
  );
}

export default Home;
