import React from 'react';
import { ResponsiveWrapper } from '@nivo/core';

import { Chart } from './Chart';

export function ResponsiveChart(props) {
  return (
    <ResponsiveWrapper>
      {({ width, height }) => (
        <Chart width={width} height={height} {...props} />
      )}
    </ResponsiveWrapper>
  );
}
