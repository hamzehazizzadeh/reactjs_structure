import React from "react";
import { Switch, Redirect } from "react-router";
import { isEmpty } from "lodash";

import AdminLayout from "../../layouts/AdminLayout";
import { decodeJWT } from "../../utils";

const AdminContainer = () => {
  const token = localStorage.getItem("token");

  const isLogin = !isEmpty(token);

  const roleName = decodeJWT(token)?.payload?.role;

  if (!isLogin || roleName !== "ADMIN") return <Redirect to="/" />;

  return (
    <AdminLayout>
      <Switch>
        {/* Dashboard Component */}
        {/* <Route
          path="/Admin/Dashboard"
          
          render={() => <DashboardAdmin />}
        /> */}
      </Switch>
    </AdminLayout>
  );
};

export default AdminContainer;
