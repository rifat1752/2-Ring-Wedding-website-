import Services from "./Services";
import Banner from "../Shared/Banner";

import Brides from "./Brides/Brides";
import About from "./About/About";

import HBlogs from "./blogs/HBlogs";
import GroomComment from "./GroomComment/GroomComment";
import Banner1 from "../Shared/Banner/Banner1";

const Home = () => {

  return (
    <div>
      <Banner1></Banner1>
      <About button={true}></About>
      <Brides></Brides>
      <Services home={true}></Services>
      <HBlogs home={true}></HBlogs>
      <GroomComment></GroomComment>
    </div>
  );
};

export default Home;
