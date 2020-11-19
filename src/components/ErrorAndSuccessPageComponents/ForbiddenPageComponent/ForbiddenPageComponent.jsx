import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const ForbiddenPageComponent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Forbidden! | Structure</title>
      </Helmet>

      <div className="container text-center">
        <h2>403</h2>
        <div>Forbidden!</div>
      </div>
    </Fragment>
  );
};

export default ForbiddenPageComponent;
