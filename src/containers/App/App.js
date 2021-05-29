import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import StructureContainer from "../StructureContainer/StructureContainer";
import CustomPreLoader from './../../utils/CustomPreLoader/CustomPreLoader';

function App() {
  const isLoader = useSelector((state) => state.isLoader);

  return (
    <BrowserRouter>
      {isLoader ? <CustomPreLoader isLoader={isLoader} /> : null}
      <StructureContainer />
    </BrowserRouter>
  );
}

export default App;
