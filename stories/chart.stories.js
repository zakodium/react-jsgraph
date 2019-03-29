import React from 'react';
import { storiesOf } from '@storybook/react';

import { ResponsiveChart } from '../src';

storiesOf('Chart', module).add('ResponsiveChart', () => (
  <div style={{ maxWidth: '100%', height: 400 }}>
    <ResponsiveChart
      chart={{
        series: [{ type: 'line', data: { x: [0, 1, 2, 3, 4], y: [0, 1, 2, 3, 4] } }]
      }}
    />
  </div>
));
