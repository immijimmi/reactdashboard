import React, { createContext, useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import PageManager from "./components/PageManager/PageManager";
import PageData from "./cls/constants";
import "./App.css";

export const PageContext = createContext(null);

function App() {
  const [page, setPage] = useState(PageData.keys.welcome)

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <div className="app">
        <NavBar />
        <PageManager />
      </div>
    </PageContext.Provider>
  );
}

export default App;
