import React from "react";
import Faq from "./faq/Faq";
import Hero from "./hero/Hero";
import Book from "./book/Book";
import Categories from "./categories/Categories";
import Footer from "../../partials/Footer";
import Testimonials from "./testimonials/Testimonials";
import Newsletter from "../../partials/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Book />
      <Categories />
      <Testimonials />
      <Faq />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
