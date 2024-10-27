import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      {/* TOAST NOTIFICATION */}
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
};

export default App;
