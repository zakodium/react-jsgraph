import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Schema} from '../../src';

const json = {
    "title": "My chart",
    "data": [
        {
            "x": [
                1,
                2,
                3,
                4,
                5
            ],
            "y": [
                1,
                2,
                3,
                2,
                1
            ]
        }
    ]
};

const App = class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Schema
                    schema={json}
                />
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('example')
);
