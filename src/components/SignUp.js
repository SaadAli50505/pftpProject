import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div id="signin">
      <form>
        <h1>Sign Up</h1>
        <div class="mb-3">
          <label id="label" for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label id="label" for="exampleInputEmail1" class="form-label">
            Email addres
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
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
        <div class="mb-3">
          <label id="label" for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          <Link id="white" to="/">
            Sign Up
          </Link>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
