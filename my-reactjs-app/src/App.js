import { HashRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/login";
import QuyTrinhXuLyPage from "./pages/quy-trinh-xu-ly/index";
import AppProvider from "./providers/app.provider";
import ProtectedRoute from "./components/ProtectedRoute";
import ResetPassword from "./pages/reset-password";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<QuyTrinhXuLyPage />} />
              {/* Add more protected routes here */}
            </Route>
          </Routes>
        </Router>
      </div>
    </AppProvider>
  );
}

export default App;
