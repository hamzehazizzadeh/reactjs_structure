import React from "react";
import { Switch, Redirect } from "react-router";
import { isEmpty } from "lodash";

import PublicLayout from "../../layouts/PublicLayout";
import { decodeJWT } from "../../utils";

const CustomerContainer = () => {
  const token = localStorage.getItem("token");

  const isLogin = !isEmpty(token);

  const roleName = decodeJWT(token)?.payload?.role;

  if (!isLogin || (roleName !== "CUSTOMER" && roleName !== "ADMIN"))
    return <Redirect to="/" />;

  return (
    <PublicLayout>
      <Switch>
        {/* Dashboard Component */}
        {/* <Route
          path="/Customer/Dashboard"
          
          render={() => <DashboardCustomer />}
        /> */}
      </Switch>
    </PublicLayout>
  );
};

export default CustomerContainer;
