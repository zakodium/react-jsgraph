# react-jsgraph

[![NPM version][npm-image]][npm-url]

## Installation

```console
npm install --save react-jsgraph
```

## Usage

```jsx
import { Graph } from 'react-jsgraph';

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
  return <Schema schema={json} style={{ height: 500 }} />;
}
```

## Documentation

See https://neptunejs.github.io/react-jsgraph/ for detailed usage examples.

[npm-image]: https://img.shields.io/npm/v/react-jsgraph.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-jsgraph
