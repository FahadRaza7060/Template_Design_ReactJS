import React from "react";

function Contact() {
  return (
    <>
      <div className="main_contact">
        <div className="sub_contact_con">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="form">
        <div className="formdesign">
          <div className="formspace">
            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              required
              placeholder="Name"
              style={{ width: "470px", height: "50px", padding: "20px" }}
            />
          </div>
          <div className="formspace">
            <label htmlFor="name"></label>
            <input
              type="number"
              id="name"
              required
              placeholder="Phone"
              style={{ width: "470px", height: "50px", padding: "20px" }}
            />
          </div>
          <div className="formspace">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              required
              placeholder="Email"
              style={{ width: "470px", height: "50px", padding: "20px" }}
            />
          </div>
          <div className="formspace">
            <label htmlFor="message"></label>
            <textarea
              id="message"
              required
              placeholder="Message"
              style={{ width: "470px", height: "120px", padding: "20px" }}
            />
          </div>
          <div className="ab">
            <button className="Abttbtn">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
