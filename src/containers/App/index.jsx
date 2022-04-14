import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import CustomPreLoader from "./../../utils/CustomPreLoader";
import AdminContainer from "../AdminContainer";
import CustomerContainer from "../CustomerContainer";
import PublicContainer from "../PublicContainer";
import NotFoundPage from "./../../components/Page/NotFoundPage";
import { decodeJWT } from "../../utils";

const App = () => {
  const isLoader = useSelector((state) => state.isLoader);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decodedToken = decodeJWT(token);
      localStorage.setItem("role", decodedToken?.payload?.role);
      const dateNow = Date.now() / 1000;
      if (decodedToken?.payload?.exp < dateNow) {
        localStorage.clear();
      }
    }
  });

  return (
    <BrowserRouter>
      {isLoader ? <CustomPreLoader isLoader={isLoader} /> : null}
      <Switch>
        {/* Admin Container */}
        <Route path="/Admin" component={AdminContainer} />
        {/* Customer Container */}
        <Route path="/Customer" component={CustomerContainer} />
        {/* Public Container */}
        <Route path="/" component={PublicContainer} />
        {/* Not Found Component */}
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
