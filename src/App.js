import "./App.css";
import IndividualAccount from "./IndividualAccount/IndividualAccount";
import JoinUs from "./JoinUs/JoinUs";
import LastStep from "./ProfileCompletion/LastStep";
import ProfileCompletion from "./ProfileCompletion/ProfileCompletion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<JoinUs />} />
        <Route path="/IndividualAccount" element={<IndividualAccount />} />
        <Route path="/ProfileCompletion" element={<ProfileCompletion />} />
        <Route path="/LastStep" element={<LastStep />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
