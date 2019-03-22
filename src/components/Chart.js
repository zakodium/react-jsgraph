import React, { useRef, useEffect } from 'react';
import JsGraph from 'node-jsgraph';

export default function Chart(props) {
  const { chart, className, style, width, height } = props;
  const ref = useRef();
  useEffect(() => {
    const root = ref.current;
    root.innerHTML = '';
    const graph = JsGraph.fromJSON(chart, root);
    graph.resize(
      width || root.clientWidth,
      height || root.clientHeight
    );
    graph.draw();
  }, [chart, width, height]);
  return (
    <div
      className={className}
      style={style}
      ref={ref}
    />
  );
}
