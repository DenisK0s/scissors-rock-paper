// modules
import React, { FC, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Layout from "components/Layout";
// import Loader from "components/utils/Loader";

// views
import GreetingPage from "views/GreetingPage";
import ChoicePage from "views/ChoicePage";
import PlayPage from "views/PlayPage";
import ErrorPage from "views/ErrorPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GreetingPage />} />
        <Route path="choise" element={<ChoicePage />} />
        <Route path="play" element={<PlayPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
