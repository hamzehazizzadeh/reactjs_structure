import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminContainer from "../AdminContainer/AdminContainer";
import CustomerContainer from "../CustomerContainer/CustomerContainer";
import PublicContainer from "../PublicContainer/PublicContainer";
import NotFoundPage from "./../../components/Page/NotFoundPage/NotFoundPage";
import PreLoader from "./../../utils/PreLoader/PreLoader";
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
    <Router>
      {isLoader && <PreLoader />}
      <Routes>
        {/* Admin Container */}
        <Route path="/Admin/*" element={<AdminContainer />} />
        {/* Customer Container */}
        <Route path="/Customer/*" element={<CustomerContainer />} />
        {/* Public Container */}
        <Route path="/*" element={<PublicContainer />} />
        {/* Not Found Component */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
