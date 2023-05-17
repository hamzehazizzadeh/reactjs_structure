import React from "react";
import { Routes, Route } from "react-router-dom";

import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import HomePublic from "./../../components/Public/HomePublic/HomePublic";

const PublicContainer = () => {
  return (
    <PublicLayout>
      <Routes>
        {/* Home Component */}
        <Route index element={<HomePublic />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicContainer;
