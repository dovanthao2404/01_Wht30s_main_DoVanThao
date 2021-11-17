import "./App.scss";
import Header from "./components/header";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Banner } from "./components/Banner";
import { Introduction } from "./components/introduction";
import { BestProduct } from "./components/best-product";
import { ListProduct } from "./components/list-product";
import { BrandStory } from "./components/branch-story";
import { useEffect, useState } from "react";
import { News } from "./components/news";
import WhatHappenedVideo from "./components/what-happened-video";
import Footer from "./components/footer";

function App() {
  const [winDow, setWinDow] = useState(window.innerWidth);

  const handleResize = () => {
    setWinDow(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winDow]);

  return (
    <>
      <Header></Header>
      <Banner />
      <Introduction />
      <BestProduct />
      <ListProduct />
      <BrandStory windowWidth={winDow} />
      <News />
      <WhatHappenedVideo />
      <Footer />
    </>
  );
}

export default App;
