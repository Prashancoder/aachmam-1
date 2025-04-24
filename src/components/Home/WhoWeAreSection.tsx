import img2 from "/public/images/www/bannernicha.jpeg";
import { Link } from "react-router-dom"; // Make sure this is imported




const WhoWeAreSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img src={img2} 
              alt="Ayurvedic herbs and ingredients"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-ayurveda-dark">
            The Natural Way to Achieve Balance, Wellness & Vitality
            </h2>
            <p className="text-gray-700 leading-relaxed">
            Discover the power of Ayurveda with Aachman Ayurveda — trusted solutions for weight loss, hair care, hormonal balance, and digestive health. Start your journey toward healing and harmony, naturally.


            </p>

<div className="pt-4">  
  <Link 
    to="/about" 
    className="text-ayurveda font-medium hover:text-ayurveda-dark transition-colors duration-300 flex items-center"
  >
    Know more
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 ml-2" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M14 5l7 7m0 0l-7 7m7-7H3" 
      />
    </svg>
  </Link>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
