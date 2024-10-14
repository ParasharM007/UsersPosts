import React, { useEffect, useState } from "react";
import profile from "./profile.png";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
function UserProfile({ data }) {
  const navigate = useNavigate();
  console.log(data);
  return( 
  <>
  
      {data?.map((item) => (
      <div className="card"  key={item?.id} onClick={() => navigate(`/user/${item?.id}`)}>
        <div className="image">
          <img src={profile} alt="" />
        </div>
        <div className="card-details">
          <div className="username">{item?.username}</div>
          <div className="name"><b>Name: </b>{item?.name}</div>
          <div><b></b>{item?.email}</div>
          <div><b>Phone:</b>{item?.phone}</div>
        </div>
      </div>
    ))}
  
    </>
  )


}

export default UserProfile;
