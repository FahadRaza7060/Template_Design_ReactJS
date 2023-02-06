import React from "react";
import { GoLocation } from "react-icons/go";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { TbLink } from "react-icons/tb";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";

function Links() {
  return (
    <>
      <div className="Link_Con">
        <div className="Link_subCon">
          <h3>Address</h3>
          <h3>Menus</h3>
          <h3>Useful Links</h3>
          <h3>Social Media</h3>
          <h3>Newsletter</h3>
        </div>
      </div>
      <div className="con">
        <div className="con2">
          <h3 className="icon-container">
            <div className="icon">
              <GoLocation />
            </div>
            Locations
          </h3>
          <h3 className="icon-container">
            <HiOutlineDotsCircleHorizontal
              size={40}
              style={{ marginRight: "10px" }}
            />
            Locations
          </h3>

          <h3 className="icon-container">
            <div className="icon">
              <TbLink />
            </div>
            Locations
          </h3>
          <h3>
            <GrFacebookOption />
            <AiOutlineTwitter />
            <AiFillLinkedin />
            <FaCameraRetro />
          </h3>
          <h3>
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Your Email"
              style={{ width: "200px", height: "40px", padding: "15px" }}
            />
          </h3>
        </div>
      </div>
      <div className="abcd">
        <button className="Abtttbtn">Subscribe</button>
      </div>
      <div className="footer">
        <p>Copyright 2019 All Right Reserved By Free html Templates</p>
      </div>
    </>
  );
}

export default Links;
