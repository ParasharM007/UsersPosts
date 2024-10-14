import React, { useEffect, useState } from "react";
import Profile from "./profile.png";
import "./UserActivities.css";
import Loading from "./loading.gif";
import { useParams } from "react-router-dom";

function UserActivities({ data, setData, loading, setLoading }) {
  const [posts, setPosts] = useState([]);
  const { id } = useParams();
  const userData = async () => {
    setLoading(true);
    const temp = await fetch(
      `https://jsonplaceholder.typicode.com/posts?${id}`
    );
    const Data = await temp.json();
    setPosts(Data);
    setLoading(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    userData();
  }, [id]);
  const user=data.find((user) => user.id===parseInt(id))
  console.log("Type of data is " + typeof posts);
  console.log(posts);
  return (
    <>
      <div className="m-container">
        <h1>{user.name}'s Posts</h1>
        <hr />
        <section className="contain">
          <div className="left">
            <img src={Profile} alt="" />
            <div className="card-details">
              <div>
                <b>{user.username}</b>
              </div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </div>
          </div>
          <>
            <div className="right">
              {loading ? (
               <img src={Loading} />
              ) : (
                posts.map((item) => (
                  <div className="posts" key={item?.id}>
                    <div className="title">{item?.title}</div>
                    <div className="desc">{item?.body}</div>
                    <hr />
                  </div>
                ))
              )}
            </div>
          </>
        </section>
      </div>
    </>
  );
}

export default UserActivities;
