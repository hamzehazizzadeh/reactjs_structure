import React, { Fragment } from "react";

const AdminLayout = ({ children }) => {
  return (
    <Fragment>
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default AdminLayout;
