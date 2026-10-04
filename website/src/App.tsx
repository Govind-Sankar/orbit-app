import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";
import CirclesBackground from "./components/CirclesBackground";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#FAFAF8] text-[#1A1A1A] dark:bg-[#121212] dark:text-[#E0E0E0]">
        <CirclesBackground />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;