import Services from "./Services";
import Banner from "../Shared/Banner";

import Brides from "./Brides/Brides";
import About from "./About/About";

import HBlogs from "./blogs/HBlogs";
import GroomComment from "./GroomComment/GroomComment";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <About button={true}></About>
      <Brides></Brides>
      <Services home={true}></Services>
      <HBlogs></HBlogs>
      <GroomComment></GroomComment>
    </div>
  );
};

export default Home;
