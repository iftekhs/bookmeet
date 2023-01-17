import React, { useRef, useState } from 'react';
import fi1 from '../../../images/feature-1.webp';
import fi2 from '../../../images/feature-2.webp';
import fi3 from '../../../images/feature-3.webp';
import Feature from './Feature/Feature';

const Features = () => {
  const [featuresImage, setFeaturesImage] = useState(fi1);
  const [imageClass, setImageClass] = useState('');

  const data = [
    {
      id: 1,
      title: 'Share your Calendly availability with others',
      text: `Grow your business with scheduling automation. Simply email, text, or add your Calendly availability to your website – and watch prospects and recruits book high-value meetings with you.`,
    },
    {
      id: 2,
      title: 'Schedule as a team',
      text: `Calendly adapts to both you and your team's scheduling preferences. Co-host a client call with a colleague, email reminders and follow-ups, and integrate everything with your preferred software tools.`,
    },
    {
      id: 3,
      title: 'Hit your number',
      text: `High-value meetings are the lifeblood of your business. Increase revenue, retain customers, and land recruits with the #1 scheduling automation platform.`,
    },
  ];

  window.addEventListener('scroll', () => {
    if (window.scrollY < 1663) {
      setFeaturesImage(fi1);
    }
    if (window.scrollY >= 1400) {
      setFeaturesImage(fi2);
    }
    if (window.scrollY >= 2000) {
      setFeaturesImage(fi3);
      setImageClass('transition-all translate-y-28');
    } else {
      setImageClass('');
    }
  });

  return (
    <section className="pt-30 py-20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center">
          We make scheduling for you <br /> easier than ever
        </h2>
        <div className="flex items-start justify-center gap-10 mt-20 relative">
          <div className="flex items-center flex-col gap-96">
            {data.map((feature) => (
              <Feature key={feature.id} title={feature.title} text={feature.text}></Feature>
            ))}
          </div>
          {/* Image */}
          <div className="sticky top-44">
            <img className={imageClass} src={featuresImage} alt="" />
          </div>
          {/* Image */}
        </div>
      </div>
    </section>
  );
};

export default Features;
