import React, { useState, useEffect } from "react";

const Login = () => {
  const [name, setName] = useState("");

  return (
    <>
      <div className="form-container">
        <h1>Login</h1>

        <form className="form">
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Github Url: </label>
            <input
              type="url"
              className="form-control"
              name="name"
              value=""
              onChange=""
            />
          </div>
          <button type="submit" className="btn">
            Add
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
