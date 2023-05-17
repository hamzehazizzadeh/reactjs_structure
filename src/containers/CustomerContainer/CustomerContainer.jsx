import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { isEmpty } from "lodash";

import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import { decodeJWT } from "../../utils";

const CustomerContainer = () => {
  const token = localStorage.getItem("token");

  const isLogin = !isEmpty(token);

  const roleName = decodeJWT(token)?.payload?.role;

  if (!isLogin || (roleName !== "CUSTOMER" && roleName !== "ADMIN"))
    return <Navigate to="/" replace />;

  return (
    <PublicLayout>
      <Routes>
        {/* Dashboard Component */}
        {/* <Route
          path="/Customer/Dashboard"
          
          render={() => <DashboardCustomer />}
        /> */}
      </Routes>
    </PublicLayout>
  );
};

export default CustomerContainer;
