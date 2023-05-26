

const Banner2 = () => {
    return (
        <section data-aos="fade-down" data-aos-delay="500" className="hero min-h-screen" style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp7309378.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
            <div className="md:w-1/2 my-5 md:me-auto">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Toy <span className="text-sky-500">Bazar</span></h1>
                    <p className="mb-5">Explore a wide range of toy cars and enjoy the ultimate shopping experience. Find your favorite toy cars and collectibles for endless hours of fun and imagination.</p>
                    <button className="btn btn-info">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Banner2;