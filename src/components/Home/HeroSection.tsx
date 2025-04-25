import CustomCarousel from "../UI/CustomCarousel";

const HeroSection = () => {
  const desktopSlides = [
    {
      id: 1,
      image: "/images/www/banner1.jpeg",
    },
    {
      id: 2,
      image: "/images/www/banner2.jpeg",
    },
  ];

  return (
    <section className="relative w-full h-[100vh] md:h-[90vh] sm:h-[75vh] xs:h-[60vh] overflow-hidden">
      {/* Desktop Carousel */}
      <div className="hidden sm:block">
        <CustomCarousel autoSlide={true} arrows={true} indicators={true}>
          {desktopSlides.map((slide) => (
            <div key={slide.id} className="relative w-full h-[100vh] md:h-[90vh] sm:h-[75vh]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 text-center text-white">
                  {/* Add desktop content if needed */}
                </div>
              </div>
            </div>
          ))}
        </CustomCarousel>
      </div>

      {/* Mobile Static Image */}
      <div className="block sm:hidden relative w-full h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(/images/mobile.png)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            {/* Add mobile content if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
