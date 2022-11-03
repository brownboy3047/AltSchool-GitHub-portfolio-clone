import React from "react";

// * material icons
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import StarBorderIcon from "@mui/icons-material/StarBorder";

// *style
import "./Header.css";

function Header({ handleRepo, handleView }) {
  return (
    <div className="head-line">
      {/* click to view the overview info */}
      <div className="overview" onClick={handleView}>
        <MenuBookIcon className="header-icon" />
        <span>Overview</span>
      </div>

      {/* click to view the repositories */}
      <div className="repo-files" onClick={handleRepo}>
        <FileOpenIcon className="header-icon" />
        <span>Repositories</span>
      </div>

      <div className="projects">
        <AutoAwesomeMosaicIcon className="header-icon" />
        <span>Projects</span>
      </div>

      <div className="packages">
        <ViewInArIcon className="header-icon" />
        <span>Packages</span>
      </div>

      <div className="star">
        <StarBorderIcon className="header-icon" />
        <span>Stars</span>
      </div>
    </div>
  );
}

export default Header;
