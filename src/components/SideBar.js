import React from "react";

// * hooks
import { useFetch } from "../hooks/useFetch";

//* style
import "./SideBar.css";

// * material icon
import GroupIcon from "@mui/icons-material/Group";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";

function SideBar() {
  const url = "https://api.github.com/users/brownboy3047";
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="sidebar">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}
      {data && <img src={data.avatar_url} alt="avatar" />}
      <h2>{data && data.name}</h2>
      <h3>{data && data.login}</h3>
      <p>{data && data.bio}</p>
      <button>Edit Profile</button>
      <div className="group">
        <GroupIcon />
        <span>
          {data && `${data.followers} followers-${data.following} following`}
        </span>
      </div>
      <div className="location">
        <LocationOnIcon />
        <span>{data && data.location}</span>
      </div>
      <div className="link">
        <LinkIcon />
        <span>{data && data.blog}</span>
      </div>
      <div className="twitter">
        <TwitterIcon />
        <span>{data && data.twitter_username}</span>
      </div>

      <hr />
    </div>
  );
}

export default SideBar;
