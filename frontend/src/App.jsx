import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./store/auth-slice";
import ProtectedRoute from "./components/protected-route";
import AddCourses from "./pages/instructor/AddCourses";
import StudentHomeView from "./pages/student/StudentHomeView";
import StudentViewLayout from "./components/student/layout";
import NotFound from "./pages/NotFound";
import InstructorDashboardPage from "./pages/instructor/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.auth
  );

  // CHECK USER AUTH
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch, isAuthenticated]);

  return (
    <div>
      <Routes>
        {/* AUTH ROUTE */}
        <Route
          path="/auth"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </ProtectedRoute>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* INSTRUCTOR */}
        <Route
          path="/instructor"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              user={user}
              children={<InstructorDashboardPage />}
            />
          }
        />
        <Route
          path="/instructor/create-new-course"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              user={user}
              children={<AddCourses />}
            />
          }
        />
        {/* STUDENT */}
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} user={user}>
              <StudentViewLayout />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<StudentHomeView />} />
        </Route>

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* TOAST NOTIFICATION */}
      <ToastContainer theme="dark" position="bottom-right" />
    </div>
  );
};

export default App;
