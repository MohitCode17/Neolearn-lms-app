import { Fragment } from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, user, children }) => {
  const location = useLocation();

  // COND-1 IF USER IS NOT AUTHENTICATED, AND TRY TO ACCESS PAGE OTHER THAN AUTH
  if (!isAuthenticated && !location.pathname.includes("/auth")) {
    return <Navigate to={"/auth/login"} />;
  }

  // COND-2 IF USER IS AUTHENTICATED, BUT TRY TO ACCESS AUTH PAGE && IF USER IS AUTHENTICATED, ROLE OF USER IS NOT INSTRUCTOR BUT TRY TO ACCESS PAGE OF INSTRUCTOR
  if (
    isAuthenticated &&
    user?.role !== "instructor" &&
    (location.pathname.includes("instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to={"/home"} />;
  }

  // COND-3 IF USER IS AUTHENTICATED, BUT TRY TO ACCESS AUTH PAGE && IF USER IS AUTHENTICATED, ROLE OF USER IS INSTRUCTOR BUT TRY TO ACCESS PAGE OF OTHER THAN INSTRUCTOR PAGE
  if (
    isAuthenticated &&
    user?.role === "instructor" &&
    (!location.pathname.includes("instructor") ||
      location.pathname.includes("/auth"))
  ) {
    return <Navigate to={"/instructor"} />;
  }

  return <Fragment>{children}</Fragment>;
};

export default ProtectedRoute;
