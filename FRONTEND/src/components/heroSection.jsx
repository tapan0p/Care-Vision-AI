import React from 'react';


const HeroSection = () => {
  return (
    <section className="py-0 grid grid-cols-2 gap-8">
      {/* Left side with video */}
      <div className="relative flex items-center justify-center h-80">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Right side with text */}
      <div className="flex items-center bg-sky-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Company</h2>
          <p className="text-lg text-blue-800">
          Care Vision AI is dedicated to transforming disease detection through the power of artificial intelligence. Our mission is to leverage cutting-edge AI technology to develop innovative diagnostic tools that enable healthcare professionals to detect diseases quickly, accurately, and cost-effectively.
          </p>
          <p className="text-lg text-blue-800 mt-4">
          We envision a future where disease detection is seamless, accessible, and reliable, ensuring better healthcare outcomes for all.
          </p>
          {/* Add more details about your company */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
