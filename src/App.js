import Header from "./common/Header";
import HomePage from "./HomePage";
import MenuTab from "./common/MenuTab";
import BottomSection from "./common/BottomSection";
import AboutPage from "./AboutPage";
import LocationsPage from "./LocationsPage";
import CareersPage from "./CareersPage";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <MenuTab />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <BottomSection />
    </HashRouter>
  );
}

export default App;
