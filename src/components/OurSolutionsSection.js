import React from 'react';
import iphone13 from '../assets/iphone13.svg'; 

const OurSolutionSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 bg-gray-100">
      <div className="flex flex-col space-y-8">
        <h3 className="text-3xl font-bold text-gray-800">Our Solution</h3>
        <p className="text-gray-600 leading-loose">
          Our platform, driven by data-driven algorithms and AI, tailors investment
          portfolios for non-finance investors. We simplify financial markets,
          empowering novices to confidently build wealth and bridge the knowledge
          gap, turning them into knowledgeable wealth builders.
        </p>
      </div>
      <div className="flex justify-end items-center">
  <img
    src={iphone13}
    alt="Platform demonstration using a modern smartphone"
    className="w-auto max-w-sm h-auto object-cover rounded-lg"
  />
</div>

    </section>
  );
};

export default OurSolutionSection;
