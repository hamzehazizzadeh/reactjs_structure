import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const NotFoundPageComponent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Page Not Found! | Structure</title>
      </Helmet>
      <div className="container text-center">
        <h2>404</h2>
        <div>Page Not Found!</div>
      </div>
    </Fragment>
  );
};

export default NotFoundPageComponent;
