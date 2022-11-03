import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

// *components
import SideBar from "../components/SideBar";
import ViewBio from "../components/ViewBio";
import Repo from "../components/Repo";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//*style
import "./Home.css";

function Home() {
  const [showRepo, setShowRepo] = useState(false);
  const [showViewBio, setShowViewBio] = useState(true);

  // To Show The Repositories
  const handleRepo = () => {
    setShowRepo(true);
    setShowViewBio(false);
  };

  // To Show to overview info
  const handleView = () => {
    setShowViewBio(true);
    setShowRepo(false);
  };

  return (
    <div className="home">
      {/* for SEO */}
      <Helmet>
        <title>GitHub portfolio Clone</title>
        <meta
          name="description"
          content="Implementation of GitHub repositories clone page 
          using async and await method to fetch data from GitHub API.
           And implementation of pagination for each repositories"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <NavBar />
      <Header handleRepo={handleRepo} handleView={handleView} />
      <hr />
      <div className="home-page">
        <SideBar />
        <div className="home-right-bar">
          {showViewBio && <ViewBio />}
          {showRepo && <Repo />}
        </div>
      </div>

      <hr />
      <Footer />
    </div>
  );
}

export default Home;
