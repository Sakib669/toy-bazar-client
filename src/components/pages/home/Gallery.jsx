import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';

const Gallery = () => {

    useEffect(()=> {
        Aos.init();
    }, [])

    return (
        <section data-aos="fade-left" data-aos-delay="500" className="my-10">
            <h2 className="text-4xl font-bold mb-10 text-center">Our Top <span className="text-sky-500">Toy Cars</span></h2>
            <div className="card-group grid md:grid-cols-2 gap-10 items-center" >
                <img className="rounded-lg md:w-1/2 mx-auto shadow-xl" src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/ferrari_roma_fronttrack.jpg?itok=tO-XRqLK" alt="Shoes" />
                <img className="rounded-lg md:w-1/2 mx-auto shadow-xl" src="https://c.ndtvimg.com/2022-01/0d2m0qkg_car_625x300_12_January_22.jpg" alt="Shoes" />
                <img className="rounded-lg md:w-1/2 mx-auto shadow-xl" src="https://multimedia.bbycastatic.ca/multimedia/products/500x500/135/13524/13524870.jpeg" alt="Shoes" />
                <img className="rounded-lg md:w-1/2 mx-auto shadow-xl" src="https://images.drive.com.au/driveau/image/upload/t_wp-default/v1/cms/uploads/zojuxtxcsxufdycvsdii" alt="Shoes" />
            </div>
        </section>
    );
};

export default Gallery;