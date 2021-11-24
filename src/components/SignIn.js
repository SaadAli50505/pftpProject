import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div id="signin">
      <form>
        <h1>Sign In</h1>
        <div class="mb-3">
          <label id="label" for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label id="label" for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p id="newuser">
          New User!<Link to="/SignUp">Sign Up</Link>
        </p>

        <button type="submit" class="btn btn-primary">
          <Link to="/" id="white">
            Sign In
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
