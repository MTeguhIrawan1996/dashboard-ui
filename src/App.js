import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./assets/style/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const Home = React.lazy(() => import("./pages/home/index"));

function App() {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<Home />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
