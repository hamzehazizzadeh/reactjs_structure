import React, { Fragment } from "react";

import SiteTitleComponent from "./../../utils/SiteTitleComponent/SiteTitleComponent";

const HomeComponent = () => {
  return (
    <Fragment>
      <SiteTitleComponent title="Home" />
      
      <div className="text-center">
        <h2>Home</h2>
      </div>
    </Fragment>
  );
};

export default HomeComponent;
