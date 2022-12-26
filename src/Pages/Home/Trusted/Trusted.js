import React from 'react';
import brand1 from '../../../images/kraken.svg';
import brand2 from '../../../images/mixpanel.svg';
import brand3 from '../../../images/nasdaq.svg';
import brand4 from '../../../images/relish-works.svg';

const Trusted = () => {
  return (
    <section className="pt-40 py-20">
      <div className="container mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-center">
            Made meetings online simplified to 120k + customers world wide
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-20 mt-10">
            <img className="h-8" src={brand1} alt="" />
            <img className="h-8" src={brand2} alt="" />
            <img className="h-8" src={brand3} alt="" />
            <img className="h-8" src={brand4} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
