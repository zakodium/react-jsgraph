import React, { useRef, useEffect } from 'react';
import JsGraph from 'node-jsgraph';

export function Chart(props) {
  const { chart, className, style, width, height } = props;
  const domRef = useRef();
  const graphRef = useRef();
  useEffect(() => {
    const root = domRef.current;
    root.innerHTML = '';
    const graph = JsGraph.fromJSON(chart, root);
    graphRef.current = graph;
    root.querySelector('svg').style.outline = 'none';
  }, [chart]);
  useEffect(() => {
    const root = domRef.current;
    const graph = graphRef.current;
    graph.resize(width || root.clientWidth, height || root.clientHeight);
    graph.draw();
  }, [width, height]);
  return <div className={className} style={style} ref={domRef} />;
}
