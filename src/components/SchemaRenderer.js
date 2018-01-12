import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

import JsGraph from 'node-jsgraph';

export default class SchemaRenderer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.updateGraph();
    }

    componentDidUpdate() {
        this.updateGraph();
    }

    render() {
        return <div style={this.props.style} ref="root" />;
    }

    updateGraph() {
        const schema = this.props.schema;
        const root = this.refs.root;
        root.innerHTML = '';
        const graph = JsGraph.fromJSON(schema, this.refs.root);
        graph.resize(this.props.width || root.clientWidth, this.props.height || root.clientHeight);
        graph.drawSeries(true);
    }
}
