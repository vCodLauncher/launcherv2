import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./templates/home/Home";
import Update from "./templates/update/Update";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/update" element={<Update />} />
          </Routes>
      </Router>
  );
}

export default App;

