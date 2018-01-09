# react-jsgraph
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

## Installation

```sh
$ npm install --save react-jsgraph
```

## Usage

```jsx
import {Schema} from 'react-jsgraph';

const json = {
    title: 'My chart',
    data: [
        {
            x: [1, 2, 3, 4, 5],
            y: [1, 2, 3, 2, 1]
        }
    ]
};

function App() {

    return (
        <Schema
            schema={json}
            style={{height: 500}}
        />
    );
}
```

[npm-image]: https://badge.fury.io/js/react-jsgraph.svg
[npm-url]: https://npmjs.org/package/react-jsgraph
[daviddm-image]: https://david-dm.org/neptunejs/react-jsgraph.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/neptunejs/react-jsgraph
