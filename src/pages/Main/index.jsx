import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SquadsForm from '../../components/Main/SquadsForm';
import SquadsSection from '../../components/Main/SquadsSection';
import CarouselDiv from '../../components/Main/Carousel';
import About from '../../components/Main/About';
import Header from '../../components/Main/Header';
import Introduction from '../../components/Main/Introduction';
import Footer from '../../components/Main/Footer';

function Main() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location?.state?.load === true) {
      window.scrollTo(0, 2392);
    }
  }, [location.state]);

  return (
    <>
      <Header />
      <Introduction />
      <About />
      <CarouselDiv />
      <SquadsSection />
      <SquadsForm />
      <Footer />
    </>
  );
}

export default Main;
