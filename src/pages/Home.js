import React from "react";

//import images


//import components
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Cta from "../components/Cta.js";
import Philosophy from "../components/Philosophy.js";
import Contact from "../components/Contact.js";
import Footer from "../components/Footer.js";

function Home() {
    return (
        <>
        <Navbar/>
        <div className="container-fluid"
        style={{paddingTop:"100px",}}>
            <Hero/>
            <Cta/>
			<Philosophy/>
			<Contact/>
            </div>
        <Footer/>
        </>
    );
}

export default Home;