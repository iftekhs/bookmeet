import React from 'react';
import featuresImage from '../../../images/features-image.webp';
import Feature from './Feature/Feature';

const Features = () => {
  return (
    <section className="pt-30 py-20">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-5xl font-semibold text-center">
          We make scheduling for you <br /> easier than ever
        </h2>
        <div className="flex items-start justify-center gap-10 mt-20 relative">
          <div className="flex items-center flex-col gap-96">
            <Feature
              title=" Share your Calendly availability with others"
              text=" Grow your business with scheduling automation. Simply email, text, or add your
                Calendly availability to your website – and watch prospects and recruits book
                high-value meetings with you."></Feature>
            <Feature
              title=" Share your Calendly availability with others"
              text=" Grow your business with scheduling automation. Simply email, text, or add your
                Calendly availability to your website – and watch prospects and recruits book
                high-value meetings with you."></Feature>
            <Feature
              title=" Share your Calendly availability with others"
              text=" Grow your business with scheduling automation. Simply email, text, or add your
                Calendly availability to your website – and watch prospects and recruits book
                high-value meetings with you."></Feature>
          </div>
          {/* Image */}
          <div className="sticky top-44">
            <img src={featuresImage} alt="" />
          </div>
          {/* Image */}
        </div>
      </div>
    </section>
  );
};

export default Features;
