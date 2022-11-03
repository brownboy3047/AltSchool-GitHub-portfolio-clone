import React from "react";
import { useNavigate } from "react-router-dom";

//* style
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>ERROR 404</h1>
      <h2>PAGE NOT FOUND</h2>

      <p>1. Check your internet for connection</p>
      <p>2. Are sure the website URL is correct</p>
      <p>3. Get in touched with the site owner</p>

      <button onClick={() => navigate("/")}>Go Back Home</button>
    </div>
  );
};

export default ErrorPage;
