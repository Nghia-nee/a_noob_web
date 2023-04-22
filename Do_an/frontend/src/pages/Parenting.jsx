import React from "react";
import Articles from "../components/Articles";
import Community from "../components/Community";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Parenting = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Navbar />
            <Community />
            <Articles />
            <Contact />
            <Footer />
        </div>
    );
};

export default Parenting;
