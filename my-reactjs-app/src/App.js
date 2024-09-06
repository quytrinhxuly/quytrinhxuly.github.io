import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/login";
import QuyTrinhXuLyPage from "./pages/quy-trinh-xu-ly/index";
import AppProvider from "./providers/app.provider";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<QuyTrinhXuLyPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
