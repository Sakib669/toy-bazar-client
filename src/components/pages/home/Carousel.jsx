
const Carousel = () => {
    return (
        <section data-aos="fade-right" data-aos-delay="500" className="carousel h-96 my-12 w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/insurance-car-sales-online_391052-6950.jpg?w=2000" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://us.123rf.com/450wm/amunique/amunique2303/amunique230302831/199698963-miniature-toy-car-on-a-blue-background-minimal-concept.jpg?ver=6" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://media.istockphoto.com/id/484977174/photo/old-fiat-500-toy-car.jpg?s=612x612&w=0&k=20&c=umIRIOaV6Acqhqh_whA57VHuI6eNNUXduxNbWy73qak=" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/boutique/replica-model-car-cullinan/component-assets/accessories-product-model-cullinan-carousel-opening-bonnet.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </section>
    );
};

export default Carousel;