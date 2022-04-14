import React, { Fragment } from "react";

const PublicLayout = ({ children }) => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default PublicLayout;
