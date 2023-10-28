import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto">
        <About></About>
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
