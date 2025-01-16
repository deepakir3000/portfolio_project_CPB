import React from "react";
import HeroCarousel from "./components/HeroCarousel";
import Cards from "./components/Cards";
import Partners from "./components/Partners";
import Roadmap from "./components/Roadmap";
import Newsletter from "./components/Newsletter";
import LearnMore from "./components/LearnMore";
import FlipText from "./components/FlipText";
import JoinCommunityModal from "../../components/pageComponents/JoinCommunityModal";

const Home = () => {
  return (
    <>
      <JoinCommunityModal />
      <div className="bg-[url('./src/assets/images/hero-img.jpg')] brightness-90 grayscale-0 bg-cover bg-center min-h-screen w-full flex flex-col justify-center">
        <div className="px-4 md:px-24">
          <h1 className="md:text-5xl lg:text-7xl text-4xl font-semibold mb-4 text-black md:w-3/4 leading-snug">
            Innovation For{" "}
            <FlipText
              texts={[
                <span key="1" className="text-[#FFDA23] leading-snug">
                  The Farmer
                </span>,
                <span key="2" className="text-[#FFDA23] leading-snug">
                  A Change
                </span>,
                <span key="3" className="text-[#FFDA23] leading-snug">
                  A Cause
                </span>,
              ]}
              duration={2000}
            />
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-8 md:w-2/4">
            At creative path breakers we create innovative solutions for the
            Agri-industry. We help farmers make profitable businesses with our
            innovative products.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-4">
            Meet our
          </p>
          <button className="btn-primary">SuperHero</button>
        </div>
      </div>
      <HeroCarousel />
      <Cards />
      <LearnMore />
      <Roadmap />
      <Partners />
      <Newsletter />
    </>
  );
};

export default Home;
