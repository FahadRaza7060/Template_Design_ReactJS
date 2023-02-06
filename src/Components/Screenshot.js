import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

function Screenshot() {
  const images = ["Images/img3.png", "Images/img3.png"];
  return (
    /* <div className="scr">
        <h1>Screenshot</h1>
      </div>
      <div className="para2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni at
        odio enim tempore doloremque sit? Debitis architecto facere sit.
      </div>

      <div className="shotimg">
        <div className="shotinsimg">
          <img src="/Images/img3.png" alt="" />
        </div>
      </div> */
    <>
      <div className="scr">
        <h1>Screenshot</h1>
      </div>
      <div className="para2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni at
          odio enim tempore doloremque sit? Debitis architecto facere sit.
        </p>
      </div>
      <div className="bbb">
        <div className="ccc">
          <Slide>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${images[0]})` }}>
                <span></span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{ backgroundImage: `url(${images[1]})` }}>
                <span></span>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <div className="abc">
        <button className="Abtbtn">Download Now</button>
      </div>
    </>
  );
}
export default Screenshot;
