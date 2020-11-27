import React from 'react';

import { Chart } from './Chart';
import ResponsiveWrapper from './ResponsiveWrapper';

export function ResponsiveChart(props) {
  return (
    <ResponsiveWrapper>
      {({ width, height }) => (
        <Chart width={width} height={height} {...props} />
      )}
    </ResponsiveWrapper>
  );
}
