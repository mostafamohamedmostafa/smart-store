import { useState } from "react";

import HeroLandingPageLandingPage from "./HeroLandingPage";
import Navigation from "./Nav";
import ShopPreview from "./ShopPreview";
import WhyUsLandingPage from "./WhyUsLandingPage";
import ProductsData from "./StoreData";

function LandingPage() {
  return (
    <div className="LandingPage">
      <Navigation></Navigation>
      <HeroLandingPageLandingPage />
      <WhyUsLandingPage></WhyUsLandingPage>
      <ShopPreview></ShopPreview>
    </div>
  );
}

export default LandingPage;
