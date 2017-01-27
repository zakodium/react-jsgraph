import React, {Component} from 'react';  // eslint-disable-line no-unused-vars

import JsGraph from 'node-jsgraph';

export default class SchemaRenderer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const schema = this.props.schema;
        var graph = JsGraph.fromSchema(schema, this.refs.root);
        graph.resize(500, 300);
        graph.drawSeries(true);
    }

    render() {
        return <div ref="root"></div>;
    }
}
