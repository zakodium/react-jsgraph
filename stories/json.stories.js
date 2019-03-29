import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import { Chart } from '../src';

import jsonAnnotationSimple from './examples/json/annotation/simple.json';
import jsonAnnotationSerie from './examples/json/annotation/serie.json';
import jsonAnnotationTypes from './examples/json/annotation/types.json';
import jsonAnnotationAdvanced from './examples/json/annotation/advanced.json';
import jsonBarSimple from './examples/json/bar/simple.json';
import jsonBarStyle from './examples/json/bar/style.json';
import jsonBarErrorBars from './examples/json/bar/errorBars.json';
import jsonLineSimple from './examples/json/line/simple.json';
import jsonLineAxis from './examples/json/line/axis.json';
import jsonLineErrorBars from './examples/json/line/errorBars.json';
import jsonLineStyle from './examples/json/line/style.json';
import jsonLineStyleAdvanced from './examples/json/line/styleAdvanced.json';
import jsonScatterSimple from './examples/json/scatter/simple.json';
import jsonScatterAxis from './examples/json/scatter/axis.json';
import jsonScatterStyle from './examples/json/scatter/style.json';

const annotations = [
  ['Simple', jsonAnnotationSimple],
  ['Serie', jsonAnnotationSerie],
  ['Types', jsonAnnotationTypes],
  ['Advanced', jsonAnnotationAdvanced]
];

const bar = [
  ['Simple', jsonBarSimple],
  ['Style', jsonBarStyle],
  ['Error bars', jsonBarErrorBars]
];

const line = [
  ['Simple', jsonLineSimple],
  ['Axis', jsonLineAxis],
  ['Error bars', jsonLineErrorBars],
  ['Style', jsonLineStyle],
  ['Advanced style', jsonLineStyleAdvanced]
];

const scatter = [
  ['Simple', jsonScatterSimple],
  ['Axis', jsonScatterAxis],
  ['Style', jsonScatterStyle]
];

function getGraph(chart) {
  return (
    <Chart
      style={{ height: 500, width: 800 }}
      width={number('width', 800)}
      height={number('height', 500)}
      chart={chart}
    />
  );
}

const annotationsStory = storiesOf('From JSON/Annotations', module);
for (const [name, json] of annotations) {
  annotationsStory.add(name, () => getGraph(json));
}

const barStory = storiesOf('From JSON/Bar', module);
for (const [name, json] of bar) {
  barStory.add(name, () => getGraph(json));
}

const lineStory = storiesOf('From JSON/Line', module);
for (const [name, json] of line) {
  lineStory.add(name, () => getGraph(json));
}

const scatterStory = storiesOf('From JSON/Scatter', module);
for (const [name, json] of scatter) {
  scatterStory.add(name, () => getGraph(json));
}
