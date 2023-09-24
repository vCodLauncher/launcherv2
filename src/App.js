import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./templates/home/Home";
import Update from "./templates/update/Update";
import VCod from "./templates/vcod/VCod";
import TypeParty from "./templates/typeparty/TypeParty";
import RankedVCod from "./templates/RankedvCod/RankedVCod";
import UnrankedVCod from "./templates/unrankedvcod/UnrankedVCod";
import Me from "./modules/me/Me";

import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/staatliches"
import RankedLaunch from "./templates/rankedlaunch/RankedLaunch";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/me" element={<Me />} />
              <Route path="/update" element={<Update />} />
              <Route path="/typeparty" element={<TypeParty/>} />
              <Route path="/rankedvcod" element={<RankedVCod />} />
              <Route path="/unrankedvcod" element={<UnrankedVCod />} />
              <Route path="/rankedlaunch" element={<RankedLaunch />} />
          </Routes>
      </Router>
  );
}

export default App;

