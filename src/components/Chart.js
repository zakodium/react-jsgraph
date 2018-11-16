import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import JsGraph from 'node-jsgraph';

export default class Chart extends Component {
  componentDidMount() {
    this.updateGraph();
  }

  componentDidUpdate() {
    this.updateGraph();
  }

  updateGraph() {
    const chart = this.props.chart;
    const root = this.el;
    root.innerHTML = '';
    const graph = JsGraph.fromJSON(chart, this.el);
    graph.resize(
      this.props.width || root.clientWidth,
      this.props.height || root.clientHeight
    );
    graph.draw();
  }

  render() {
    return (
      <div
        style={this.props.style}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}
