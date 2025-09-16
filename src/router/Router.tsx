import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "../pages/Home.jsx";
import Profile from "../pages/Profile.jsx";
import MenuLayout from "../layouts/MenuLayout.js";
import Dashboard from "../pages/Dashboard.js";
import ProductsList from "../pages/Product/ProductsList.jsx";

export default function Router() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Loading...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <MenuLayout>
              <Dashboard />
            </MenuLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isAuthenticated ? (
            <MenuLayout>
              <Profile />
            </MenuLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/products/list"
        element={
          isAuthenticated ? (
            <MenuLayout>
              <ProductsList />
            </MenuLayout>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}
