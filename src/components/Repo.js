import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// * components
import Pagination from "./Pagination";

// *hooks
import { useFetch } from "../hooks/useFetch";

// * style
import "./Repo.css";

function Repo() {
  const {
    data: repos,
    isPending,
    error,
  } = useFetch("https://api.github.com/users/brownboy3047/repos");

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  // Get current Data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = repos.slice(indexOfFirstData, indexOfLastData);

  // change page
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // To go to the previous page
  const prevPage = () => {
    if (currentPage <= 1) {
      return currentPage;
    }
    setCurrentPage((currentPage) => currentPage - 1);
  };

  // To move to the next page
  const nextPage = () => {
    const pagelength = repos.length / dataPerPage;
    if (currentPage < pagelength) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  return (
    <div className="repo">
      {error && <p className="error">{error}</p>}
      {isPending && <div className="loading">Loading...</div>}

      <section className="repo-card">
        {currentData &&
          currentData.map((repo) => (
            <div key={repo.id} className="repo-card-list">
              <div className="repo-link">
                <h1>
                  <Link to={`/repos/${repo.full_name}`}>{repo.name}</Link>
                </h1>
                <h4>{repo.visibility}</h4>
              </div>
              <p>{repo.description}</p>
              <small>{repo.language}</small>
            </div>
          ))}
      </section>

      <Pagination
        dataPerPage={dataPerPage}
        totalData={repos.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        isPending={isPending}
      />
    </div>
  );
}

export default Repo;
