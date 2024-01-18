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
      <Services></Services>
      <Brides></Brides>
      <About></About>
      <HBlogs></HBlogs>
      <GroomComment></GroomComment>
    </div>
  );
};

export default Home;
