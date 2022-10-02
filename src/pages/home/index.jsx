import React from "react";
import { Content, Footer, Header, Sidebar } from "../../components";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1">
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
