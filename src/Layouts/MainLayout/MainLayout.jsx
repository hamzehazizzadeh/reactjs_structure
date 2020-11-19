import React from 'react';
import { withRouter } from 'react-router';

const MainLayout = ({ children }) => {
  return (
    <div className="rtl">
      {/* <Header /> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default withRouter(MainLayout);
