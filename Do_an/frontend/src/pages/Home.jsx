import About from "../components/About";
import Articles from "../components/Articles";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <Navbar />
            <Hero />
            <About />
            <Articles />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
