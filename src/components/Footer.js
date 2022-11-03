import React from "react";
import { Link } from "react-router-dom";

// *material icon
import GitHubIcon from "@mui/icons-material/GitHub";
import CopyrightIcon from "@mui/icons-material/Copyright";

// * style
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">
            <GitHubIcon className="footer-logo-one" />
          </Link>

          <div className="footer-logo-two">
            <CopyrightIcon className="footer-copy-icon" />
            <small>2022 GitHub, Inc. </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
