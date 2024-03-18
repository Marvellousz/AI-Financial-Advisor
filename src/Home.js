import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Faq from './components/Faq';
import StartInvestingLink from './components/StartInvestingLink';
import Footer from './components/Footer';
import OurSolutionSection from './components/OurSolutionsSection';

const Home = () => {
  return (
    <div>
      <Header />  
      <Main />
      <StartInvestingLink />
      <OurSolutionSection />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
