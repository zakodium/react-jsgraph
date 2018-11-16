import React from 'react';
import { storiesOf } from '@storybook/react';

import { Graph } from '../src';

import json from './data/graph.json';

storiesOf('jsGraph', module).add('test 1', () => (
  <Graph style={{ height: 500, width: 800 }} chart={json} />
));
