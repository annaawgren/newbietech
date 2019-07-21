import { Layout } from "../components/Layout";
import { About } from "../components/About";
import { ExploreAndLearn } from "../components/ExploreAndLearn";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LoveToExplore } from "../components/LoveToExplore";
import { MachineLearning } from "../components/MachineLearning";
import { Partner } from "../components/Partner";
import { Spinner } from "../components/Spinner";
import { StayTuned } from "../components/StayTuned";
import { ThisIsNewbie } from "../components/ThisIsNewbie";
import { WhatWeDo } from "../components/WhatWeDo";

const Home = () => {
  return (
    <Layout title="NewbieTech">
      <Header />
      <Hero />
      {/* <ThisIsNewbie />
      <WhatWeDo />
      <About />
      <ExploreAndLearn />
      <Footer />

      <LoveToExplore />
      <Spinner />
      <MachineLearning />
      <Spinner />
      <Partner />
      <StayTuned /> */}
    </Layout>
  );
};

export default Home;
