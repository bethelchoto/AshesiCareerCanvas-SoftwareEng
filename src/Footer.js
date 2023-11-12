import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyrights">
      <p>&copy; {currentYear} Your Company Name. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;