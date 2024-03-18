import React from 'react';

const StartInvestingLink = () => {
  return (
    <a href="./form1.html" className="start_investing">
      Start Investing &#8594;
    </a>
  );
};

const OurSolutionSection = () => {
  return (
    <div className="main_2" id="services">
      <div className="main_2_text">
        <h3>Our Solution</h3>
        <p>Our platform, driven by data-driven algorithms and AI, 
           tailors investment portfolios for non-finance investors. 
           We simplify financial markets, empowering novices to 
           confidently build wealth and bridge the knowledge gap, turning 
           them into knowledgeable wealth builders.</p>
      </div>
      <div className="main_2_img" style={{ marginLeft: '250px' }}>
        <img src="./images/iPhone 13 Pro.png" alt="iPhone 13 Pro" />
      </div>
    </div>
  );
};

export { StartInvestingLink, OurSolutionSection };
