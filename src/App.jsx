import NavBar from "./components/NavBar";
import "./css/App.css";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import Watching from "./pages/Watching.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/watching" element={<Watching />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
