import React from "react";
import { Helmet } from "react-helmet";

const SiteTitleComponent = ({ title, isVisibleSuffix = true }) => {
  return (
    <Helmet>
      <title>
        {title} {isVisibleSuffix ? "Structure" : ""}
      </title>
    </Helmet>
  );
};

export default SiteTitleComponent;
