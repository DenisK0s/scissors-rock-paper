// modules
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

// styled components

// components

const ErrorPage: FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ErrorPage;
