import React, { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import PageManager from "./components/PageManager/PageManager";
import PageData from "./cls/constants";

function App() {
  const [page, setPage] = useState(PageData.keys.welcome)

  return (
    <div>
      <NavBar page={page} setPage={setPage} />
      <PageManager page={page} />
    </div>
  );
}

export default App;
