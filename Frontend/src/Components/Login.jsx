import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    let value = event.target.value;

    setData({
      ...data,
      [event.target.name]: value,
    });
  }

  function submitChange() {
    axios({
      method: "POST",
      url: "https://masai-api-mocker.herokuapp.com/auth/register",
      data: data,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  console.log(data);
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={data.username}
        onChange={handleChange}
        placeholder="Enter User Name"
      />
      <input
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <button onClick={submitChange}>Submit</button>
    </div>
  );
};
