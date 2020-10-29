import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { Switch, Route, Redirect } from "react-router";

import MainLayout from "../../components/Layouts/MainLayout/MainLayout";
import Home from './../../components/Home/Home';
import NotFound from './../../components/NotFound/NotFound';
import { decodeToken } from './../../utils/JWTUtils/decodeToken';
import { logoutUser } from './../../services/userServices';

const Structure = () => {
  const [user, setUser] = useState("");
  const token = localStorage.getItem("token");
  let tokenRole = localStorage.getItem("role");

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      localStorage.setItem("role", decodedToken.payload.role);
      const dateNow = Date.now() / 1000;
      if (decodedToken.payload.exp < dateNow) {
        localStorage.clear();
        logoutUser(decodedToken);
      } else {
        setUser(decodedToken.payload.unique_name);
      }
    }
  });

  return (
    <Switch>
      {/* <Route path={["/admin"]}>
        <PrivateLayout>
          <Route
            path="/admin"
            exact
            render={() =>
              !isEmpty(user) && tokenRole === 'ADMINISTRATOR' ? (
                <Dashboard />
              ) : (
                <Redirect to="/" />
              )
            }
          />
        </PrivateLayout>
      </Route> */}
      <Route path={["/"]}>
        <MainLayout>
          <Switch>
            {/* Login Component */}
            {/* <Route
              path="/Auth/Login"
              render={() =>
                isEmpty(user) ? (
                  <AuthContext>
                    <Login />
                  </AuthContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            /> */}
            {/* Logout Component */}
            {/* <Route
              path="/Auth/Logout"
              render={() => (isEmpty(user) ? <Redirect to="/" /> : <Logout />)}
            /> */}
            {/* register Component */}
            {/* <Route
              path="/Auth/Register"
              render={() =>
                isEmpty(user) ? (
                  <AuthContext>
                    <Register />
                  </AuthContext>
                ) : (
                  <Redirect to="/" />
                )
              }
            /> */}
            {/* Api */}
            <Route path="/api" />
            {/* Home Component */}
            <Route path="/" exact component={Home} />
            {/* Not Found Component */}
            <Route path="*" exact component={NotFound} />
          </Switch>
        </MainLayout>
      </Route>
    </Switch>
  );
};

export default Structure;
