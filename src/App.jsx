import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NavBar from "./components/NavBar";
import GameDetailPage from "./pages/GameDetailPage"; // Updated
import GameUpdatePage from "./pages/GameUpdatePage"; // Updated

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/games/:id" element={<GameDetailPage />} /> {/* Updated */}
        <Route path="/games/:id/update" element={<GameUpdatePage />} />{" "}
        {/* Updated */}
      </Routes>
    </main>
  );
}

export default App;
