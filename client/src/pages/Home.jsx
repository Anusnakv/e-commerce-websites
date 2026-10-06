import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import NewArrivals from "../components/home/NewArrivals";
import Footer from "../components/layout/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
       <Categories />
       <NewArrivals />
      <Footer />
    </>
  );
};

export default Home;