import React, { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// import "@coreui/coreui/dist/css/coreui.min.css";
// import "./assets/style/style.css";
import "./assets/style/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const Home = React.lazy(() => import("./pages/home/index"));

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="*" name="Home" element={<Home />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </div>
  );
}

export default App;
