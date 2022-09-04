import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router";
// import {
//   fetchStateFailure,
//   fetchStateSuccess,
//   fetchStateRequest,
// } from "../Redux/State/action";

export const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
  });

  const navigate = useNavigate;

  // const dispatch = useDispatch();
  function handleChange(event) {
    let value = event.target.value;
    setData({
      ...data,
      [event.target.name]: value,
    });
  }
  // console.log(data);
  // const state = useSelector((store) => store.state.state);
  // console.log("state", state);

  function submitChange() {
    // const req = fetchStateRequest;
    dispatch(req);
    axios({
      method: "POST",
      url: "https://masai-api-mocker.herokuapp.com/auth/register",
      data: data,
    })
      .then((response) => {
        // dispatch(fetchStateSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        // dispatch(fetchStateFailure(error));
      });
    if ((state.error = false)) {
      alert("Success");
      navigate("/login");
    }
  }

  return (
    <div>
      <h1>Sign up</h1>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Enter Your name"
      />
      <br />
      <input
        type="text"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <br />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <br />
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Enter Username"
      />
      <br />
      <input
        type="Number"
        name="mobile"
        value={data.mobile}
        onChange={handleChange}
        placeholder="enter Mobile Number"
      />
      <br />
      <input
        type="text"
        name="description"
        value={data.description}
        onChange={handleChange}
        placeholder="Enter Description"
      />
      <br />
      <button onClick={submitChange}>Submit</button>
    </div>
  );
};
