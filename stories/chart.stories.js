import React from 'react';

import { ResponsiveChart } from '../src';

export default {
  title: 'ResponsiveChart',
  component: ResponsiveChart,
};

export function Responsive() {
  return (
    <div style={{ maxWidth: '100%', height: 400 }}>
      <ResponsiveChart
        chart={{
          series: [
            { type: 'line', data: { x: [0, 1, 2, 3, 4], y: [0, 1, 2, 3, 4] } },
          ],
        }}
      />
    </div>
  );
}
