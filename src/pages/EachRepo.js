import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// *components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// *hooks
import { useFetch } from "../hooks/useFetch";

// * material icons
import FileOpenIcon from "@mui/icons-material/FileOpen";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ForkRightIcon from "@mui/icons-material/ForkRight";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

// *style
import "./EachRepo.css";

function EachRepo() {
  const { full_name } = useParams();
  const url = "https://api.github.com/repos/brownboy3047/" + full_name;
  const { data: eachRepo, isPending, error } = useFetch(url);

  return (
    <div className="each-repo">
      <Helmet>
        <title>GitHub repositories</title>
        <meta
          name="description"
          content="Implementation of each GitHub repositories clone page 
          using async and await method to fetch data from GitHub API."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <NavBar />
      <div className="each-repo-info">
        {error && <p className="error">{error}</p>}
        {isPending && <div className="loading">Loading...</div>}
        <header className="each-repo-head">
          <div className="each-repo-name">
            <FileOpenIcon />
            <h3>{eachRepo && eachRepo.full_name}</h3>
            <p>{eachRepo && eachRepo.visibility}</p>
          </div>

          <div className="each-repo-head-btn">
            <button>Watch</button>
            <button>Fork</button>
            <button>Star</button>
          </div>
        </header>
      </div>

      <hr />

      <main className="each-repo-main">
        <section className="each-repo-section">
          <button>{eachRepo && eachRepo.default_branch}</button>

          <div className="each-repo-section-code">
            {/* <h4>{eachRepo && eachRepo.owner.login}</h4> */}
            <h4>Brownboy3047</h4>

            <hr />

            <div className="each-repo-section-code-info">
              <div className="each-repo-section-code-info-one">
                <div>
                  <InsertDriveFileIcon />
                  <h5>app.js</h5>
                </div>

                <p>First commit</p>
                <small>5 Months ago</small>
              </div>

              <hr />

              <div className="each-repo-section-code-info-two">
                <div>
                  <InsertDriveFileIcon />
                  <h5>index.html</h5>
                </div>

                <p>First commit</p>
                <small>5 Months ago</small>
              </div>

              <hr />

              <div className="each-repo-section-code-info-three">
                <div>
                  <InsertDriveFileIcon />
                  <h5>style.css</h5>
                </div>

                <p>First commit</p>
                <small>5 Months ago</small>
              </div>
            </div>
          </div>
        </section>

        <aside className="each-repo-aside">
          <h4>About</h4>
          <h5>{eachRepo && eachRepo.description}</h5>

          <div className="each-repo-aside-icon">
            <StarBorderIcon />
            <p>Star</p>
          </div>

          <div className="each-repo-aside-icon">
            <VisibilitySharpIcon />
            <p>Watching</p>
          </div>

          <div className="each-repo-aside-icon">
            <ForkRightIcon />
            <p>Fork</p>
          </div>

          <hr />

          <div className="each-repo-aside-language">
            <h4>Languages</h4>
            <p>{eachRepo && eachRepo.language}</p>
          </div>
        </aside>
      </main>

      <hr />

      <Footer />
    </div>
  );
}

export default EachRepo;
