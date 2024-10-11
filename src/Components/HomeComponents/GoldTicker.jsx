import React, { useEffect, useRef } from 'react';

const GoldTicker = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    let tickerWidth = ticker.scrollWidth;

    const animateTicker = () => {
      ticker.style.transition = 'transform 15s linear';
      ticker.style.transform = `translateX(-${tickerWidth}px)`;
    };

    const resetTicker = () => {
      ticker.style.transition = 'none';
      ticker.style.transform = 'translateX(100%)';
      setTimeout(() => {
        animateTicker();
      }, 100);
    };

    ticker.addEventListener('transitionend', resetTicker);
    animateTicker();

    return () => {
      ticker.removeEventListener('transitionend', resetTicker);
    };
  }, []);

  return (
    <div className="overflow-hidden bg-yellow-200 text-black py-2">
      <div className="whitespace-nowrap flex items-center" ref={tickerRef}>
        <div className="px-8 font-medium">Gold Price: $1,800/oz (+2.5%)</div>
        <div className="px-8 font-medium">24K: $58.50/gram (+1.2%)</div>
        <div className="px-8 font-medium">22K: $54.00/gram (-0.5%)</div>
        <div className="px-8 font-medium">18K: $45.00/gram (+0.8%)</div>
      </div>
    </div>
  );
};

export default GoldTicker;
