import React from "react";
import { Switch, Route } from "react-router";

import PublicLayout from "../../layouts/PublicLayout";
import HomePublic from "./../../components/Public/HomePublic";

const PublicContainer = () => {
  return (
    <PublicLayout>
      <Switch>
        {/* Home Component */}
        <Route path="/" exact render={HomePublic} />
      </Switch>
    </PublicLayout>
  );
};

export default PublicContainer;
