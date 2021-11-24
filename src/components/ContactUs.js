import React from "react";

function ContactUs() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <form>
        <div class="mb-3">
          <label id="label" for="exampleInputEmail1" class="form-label">
            Name
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
            Message
          </label>
          <input id="message" type="text" class="form-control" />
        </div>

        <button id="btn" type="submit" class="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
