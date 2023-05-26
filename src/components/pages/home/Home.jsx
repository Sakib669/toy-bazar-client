import { useEffect } from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import ShopByCategory from "./ShopByCategory";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";
import Banner2 from "./Banner2";

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div className="mx-5 md:mx-16">
            <Helmet>
                <title>{'Toy Bazar | Home'}</title>
            </Helmet>
            {/* Caoursel section */}
            <Banner2></Banner2>
            <Carousel></Carousel>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Banner></Banner>
        </div>
    );
};

export default Home;