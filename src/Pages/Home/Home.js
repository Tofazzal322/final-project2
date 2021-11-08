import React from "react";
// import Login from "../Login/Login";
import Footer from "../Shared/Footer";
// import Navigation from "../Shared/Navigation";
import AppointmentBanner from "./AppointmentBanner";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import Exceptional from "./Exceptional";
// import Service from './Service';
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      {/* <Navigation></Navigation> */}
      {/* <Login/> */}
      <Banner></Banner>
      <Services></Services>
      <Exceptional> </Exceptional>
      <AppointmentBanner> </AppointmentBanner>
      <Testimonial></Testimonial>
      <ContactUs> </ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
