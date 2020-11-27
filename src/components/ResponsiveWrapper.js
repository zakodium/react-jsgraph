// Based on the code from:
// https://github.com/plouc/nivo/blob/1ab12579594baa2eb2c89e65c6bdf81a0e85cfd0/packages/core/src/hooks/useMeasure.js
// https://github.com/plouc/nivo/blob/1ab12579594baa2eb2c89e65c6bdf81a0e85cfd0/packages/core/src/components/ResponsiveWrapper.js

import React, { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function useMeasure() {
  const measureRef = useRef(null);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const [observer] = useState(
    () => new ResizeObserver(([entry]) => setBounds(entry.contentRect)),
  );

  useEffect(() => {
    if (measureRef.current) {
      observer.observe(measureRef.current);
    }

    return () => observer.disconnect();
  }, [observer]);

  return [measureRef, bounds];
}

function ResponsiveWrapper({ children }) {
  const [measureRef, bounds] = useMeasure();
  const shouldRender = bounds.width > 0 && bounds.height > 0;

  return (
    <div ref={measureRef} style={{ width: '100%', height: '100%' }}>
      {shouldRender && children({ width: bounds.width, height: bounds.height })}
    </div>
  );
}

export default ResponsiveWrapper;
