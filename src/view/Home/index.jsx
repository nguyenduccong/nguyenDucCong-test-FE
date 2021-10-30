import React from "react";

import BannerTop from './components/BannerTop/Index';
import Introduction from './components/introduction/index';
import BestPD from './components/BestPD/index';
import ListProduct from './components/Products/index'

const Home = () => {

  return (
    <>
      <BannerTop></BannerTop>
        {/*  */}
      <Introduction></Introduction>
      {/*  */}
      <BestPD></BestPD>
      {/*  */}
      <ListProduct></ListProduct>
    </>
  )
}

export default Home