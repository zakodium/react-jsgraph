import React from 'react';

import { Chart } from '../src';

import jsonAnnotationAdvanced from './examples/json/annotation/advanced.json';
import jsonAnnotationSerie from './examples/json/annotation/serie.json';
import jsonAnnotationSimple from './examples/json/annotation/simple.json';
import jsonAnnotationTypes from './examples/json/annotation/types.json';
import jsonBarErrorBars from './examples/json/bar/errorBars.json';
import jsonBarSimple from './examples/json/bar/simple.json';
import jsonBarStyle from './examples/json/bar/style.json';
import jsonLineAxis from './examples/json/line/axis.json';
import jsonLineErrorBars from './examples/json/line/errorBars.json';
import jsonLineSimple from './examples/json/line/simple.json';
import jsonLineStyle from './examples/json/line/style.json';
import jsonLineStyleAdvanced from './examples/json/line/styleAdvanced.json';
import jsonScatterAxis from './examples/json/scatter/axis.json';
import jsonScatterSimple from './examples/json/scatter/simple.json';
import jsonScatterStyle from './examples/json/scatter/style.json';

export default {
  title: 'Chart',
  component: Chart,
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 800,
    },
    height: {
      control: 'number',
      defaultValue: 500,
    },
  },
};

function Template(args) {
  return <Chart style={{ height: args.height, width: args.width }} {...args} />;
}

export const SimpleAnnotations = Template.bind({});
SimpleAnnotations.args = { chart: jsonAnnotationSimple };

export const SerieAnnotations = Template.bind({});
SerieAnnotations.args = { chart: jsonAnnotationSerie };

export const TypesAnnotations = Template.bind({});
TypesAnnotations.args = { chart: jsonAnnotationTypes };

export const AdvancedAnnotations = Template.bind({});
AdvancedAnnotations.args = { chart: jsonAnnotationAdvanced };

export const SimpleBar = Template.bind({});
SimpleBar.args = { chart: jsonBarSimple };

export const StyleBar = Template.bind({});
StyleBar.args = { chart: jsonBarStyle };

export const ErrorBarsBar = Template.bind({});
ErrorBarsBar.args = { chart: jsonBarErrorBars };

export const SimpleLine = Template.bind({});
SimpleLine.args = { chart: jsonLineSimple };

export const AxisLine = Template.bind({});
AxisLine.args = { chart: jsonLineAxis };

export const ErrorBarsLine = Template.bind({});
ErrorBarsLine.args = { chart: jsonLineErrorBars };

export const StyleLine = Template.bind({});
StyleLine.args = { chart: jsonLineStyle };

export const AdvancedStyleLine = Template.bind({});
AdvancedStyleLine.args = { chart: jsonLineStyleAdvanced };

export const SimpleScatter = Template.bind({});
SimpleScatter.args = { chart: jsonScatterSimple };

export const AxisScatter = Template.bind({});
AxisScatter.args = { chart: jsonScatterAxis };

export const StyleScatter = Template.bind({});
StyleScatter.args = { chart: jsonScatterStyle };
