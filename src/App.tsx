// modules
import React, { FC, useEffect, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// components
import Layout from "components/Layout";
// import Loader from "components/utils/Loader";

// views lazy
const GreetingPage = lazy(() =>
  import("views/GreetingPage" /* webpackChunkName: "greeting-page" */)
);
const PlayGroundPage = lazy(() =>
  import("views/PlayGroundPage" /* webpackChunkName: "playground-page" */)
);
const ChoicePage = lazy(() => import("views/ChoicePage" /* webpackChunkName: "choice-page" */));
const BettPage = lazy(() => import("views/BettPage" /* webpackChunkName: "bett-page" */));
const OutcomePage = lazy(() => import("views/OutcomePage" /* webpackChunkName: "outcome-page" */));
const ErrorPage = lazy(() => import("views/ErrorPage" /* webpackChunkName: "error-page" */));

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<GreetingPage />} />
        <Route path="playground" element={<PlayGroundPage />}>
          <Route index element={<ChoicePage />} />
          <Route path="bett" element={<BettPage />} />
          <Route index element={<OutcomePage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
