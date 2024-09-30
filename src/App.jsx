import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
      {/* <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to="/login" />} /> */}
        {/* <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        /> */}
        <Route exact path="/" element={<Home/>}/>
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Error />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
