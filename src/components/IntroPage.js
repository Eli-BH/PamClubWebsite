import React from "react";
import "../styles/styles.css";
import Image from "react-bootstrap/Image";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="IntroPageDiv">
      <Link to="/Home">
        <Zoom>
          <Image
            src={require("../images/C.png")}
            fluid
            className="introImage"
          />
        </Zoom>
      </Link>
    </div>
  );
};

export default IntroPage;
