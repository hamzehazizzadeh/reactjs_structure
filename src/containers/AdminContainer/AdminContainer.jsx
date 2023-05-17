import React from "react";
import { Routes, Navigate } from "react-router-dom";
import { isEmpty } from "lodash";

import AdminLayout from "../../layouts/AdminLayout/AdminLayout";
import { decodeJWT } from "../../utils";

const AdminContainer = () => {
  const token = localStorage.getItem("token");

  const isLogin = !isEmpty(token);

  const roleName = decodeJWT(token)?.payload?.role;

  if (!isLogin || roleName !== "ADMIN") return <Navigate to="/" replace />;

  return (
    <AdminLayout>
      <Routes>
        {/* Dashboard Component */}
        {/* <Route
          path="/Admin/Dashboard"
          
          render={() => <DashboardAdmin />}
        /> */}
      </Routes>
    </AdminLayout>
  );
};

export default AdminContainer;
