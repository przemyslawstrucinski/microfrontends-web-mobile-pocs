import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const siteTitle = title
    ? `${title} | DoctorBook`
    : 'DoctorBook - Find Your Perfect Doctor';
  const siteDescription =
    description ||
    'Book appointments with verified healthcare professionals across Poland';

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
    </>
  );
};

export default SEO;

