// ProtectedRoute.js
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import authServices from "../services/authServices";
import { Card } from "antd";
import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  // Example token check
  const valid = authServices.check();
  if (!valid) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  const userSession = authServices.getUserSession();

  function handleLogout() {
    authServices.logout();
    navigate("/login");
  }

  // If token exists, render the child components
  return (
    <Card title={<UserAvatar user={userSession} onLogout={handleLogout} />}>
      <Outlet />
    </Card>
  );
};

export default ProtectedRoute;
