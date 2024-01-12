import Services from "./Services";
import Banner from "../Shared/Banner";
import { useLoaderData } from "react-router-dom";
import Brides from "./Brides/Brides";
import About from "./About/About";

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Brides></Brides>
      <About></About>
    </div>
  );
};

export default Home;
