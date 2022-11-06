import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import PaginationComponent from "./components/PaginationComponent";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="paginationComponent"> Profile </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="paginationComponent" element={<PaginationComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App">
        <div className="App-header"></div>
      </div>
    </Router>
  );
}

export default App;
