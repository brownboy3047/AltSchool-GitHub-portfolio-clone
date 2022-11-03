import { BrowserRouter, Route, Routes } from "react-router-dom";

// *pages
import Home from "./pages/Home";
import EachRepo from "./pages/EachRepo";
import ErrorPage from "./pages/ErrorPage";

//*style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repos/brownboy3047/:full_name" element={<EachRepo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
