import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { About } from "./components/aboutUs/About";
import { Advisors } from "./components/advisors/Advisors";
import { Blog } from "./components/blog/Blog";
import { Crowdsale } from "./components/crowdsale/Crowdsale";
import { CrowdsaleOpen } from "./components/crowdsaleOpen/CrowdsaleOpen";
import { DocumentPage } from "./components/documentPage/DocumentPage";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Newsletter } from "./components/newsletter/Newsletter";
import { ProductInfo } from "./components/productInfo/ProductInfo";
import { Questions } from "./components/questions/Questions";
import { ReadMore } from "./components/readMore/ReadMore";
import { RoadMap } from "./components/roadMap/RoadMap";
import { Team } from "./components/team/Team";
import { TokenInfo } from "./components/tokenInfo/TokenInfo";
import { VideoPage } from "./components/videoPage/VideoPage";

export const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <VideoPage />
      <RoadMap />
      <ProductInfo />
      <Crowdsale />
      <CrowdsaleOpen />
      <ReadMore />
      <TokenInfo />
      <DocumentPage />
      <Questions />
      <Advisors />
      <Team />
      <About />
      <Blog />
      <Newsletter />
      <Footer />
    </>
  );
};
