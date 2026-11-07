// src/App.tsx

import BriansBrain from "./components/BriansBrain";
import Portfolio from "./components/Portfolio";
import Travels from "./components/Travels";
import "./App.css";

function App() {
  if (window.location.pathname === "/travels" || window.location.pathname === "/travels/") {
    return <Travels />;
  }

  return (
    <>
      <BriansBrain />
      <Portfolio />
    </>
  );
}

export default App;
