import React, { useState } from "react";
import { Link } from "react-router-dom";

//* Material icons
import GitHubIcon from "@mui/icons-material/GitHub";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AddIcon from "@mui/icons-material/Add";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

//* style
import "./NavBar.css";

function NavBar() {
  const [showItems, setShowItems] = useState(false);
  return (
    <nav className="navbar">
      <div className="menu-bar" onClick={() => setShowItems(!showItems)}>
        <MenuIcon />
      </div>
      <div className="left-nav">
        <Link to="/">
          <GitHubIcon className="github-logo" />
        </Link>
        <div className="nav-input">
          <input type="text" placeholder="Search or jump to..." />
          <SearchIcon className="search-icon" />
        </div>
        <div className="left-nav-items" id={showItems ? "hidden" : ""}>
          <p>Pull requests</p>
          <p>Issues</p>
          <p>Marketplace</p>
          <p>Explore</p>
        </div>
      </div>

      <div className="right-nav">
        <NotificationsNoneIcon className="nav-notification" />
        <AddIcon className="nav-add" />
        <Avatar
          className="nav-avatar"
          alt="brownboy"
          src="https://avatars.githubusercontent.com/u/98109177?v=4"
        />
      </div>
    </nav>
  );
}

export default NavBar;
