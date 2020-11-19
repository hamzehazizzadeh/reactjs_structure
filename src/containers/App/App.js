import React from "react";
import { BrowserRouter } from "react-router-dom";

import StructureContainer from "../StructureContainer/StructureContainer";

function App() {
  return (
    <BrowserRouter>
      <StructureContainer />
    </BrowserRouter>
  );
}

export default App;
