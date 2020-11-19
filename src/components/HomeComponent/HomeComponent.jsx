import React, { Fragment } from "react";
import { Helmet } from "react-helmet";

const HomeComponent = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Home | Structure</title>
      </Helmet>
      <div className="text-center">
        <h2>Home</h2>
      </div>
    </Fragment>
  );
};

export default HomeComponent;
