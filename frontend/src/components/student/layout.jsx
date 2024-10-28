import React from "react";
import { Outlet } from "react-router-dom";

const StudentViewLayout = () => {
  return (
    <div>
      StudentViewLayout
      <Outlet />
    </div>
  );
};

export default StudentViewLayout;
