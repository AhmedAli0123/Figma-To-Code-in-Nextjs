import React from "react"; 
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Project from "./component/Project";
import WorkTo from "./component/WorkTo";
import Extension from "./component/Extension";
import Cuztomize from "./component/Cuztomize";
import EveryWork from "./component/EveryWork";
import Sponsers from "./component/Sponsers";
import Footer from "./component/Footer";


export default function Main(){
  return(
    <>
      <Navbar></Navbar>
      <Hero />
      <Project />
      <WorkTo />
      <Extension />
      <Cuztomize />
      <EveryWork />
      <Sponsers />
      <Footer />
    </>
  )
}