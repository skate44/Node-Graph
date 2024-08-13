import './index.css';
import React from 'react';
import ServiceGraph from './ServiceGraph';

const data = {
  nodes: [
      { id: 1, name: 'Service A', color: '#66c2a5', borderColor: 'green', icon: 'path/to/http-icon.svg', port: 8080, namespace: 'default', cluster: 'cluster-A', successRate: 95 },
      { id: 2, name: 'Service B', color: '#fc8d62', borderColor: 'red', icon: 'path/to/mysql-icon.svg', port: 3306, namespace: 'db', cluster: 'cluster-B', successRate: 80 },
      { id: 3, name: 'Service C', color: '#8da0cb', borderColor: 'yellow', icon: 'path/to/redis-icon.svg', port: 6379, namespace: 'cache', cluster: 'cluster-C', successRate: 85 },
      { id: 4, name: 'Service D', color: '#e78ac3', borderColor: 'green', icon: 'path/to/grpc-icon.svg', port: 9090, namespace: 'default', cluster: 'cluster-D', successRate: 98 },
      { id: 5, name: 'Service E', color: '#a6d854', borderColor: 'green', icon: 'path/to/http-icon.svg', port: 8081, namespace: 'default', cluster: 'cluster-A', successRate: 92 },
      { id: 6, name: 'Service F', color: '#ffd92f', borderColor: 'red', icon: 'path/to/mysql-icon.svg', port: 3307, namespace: 'db', cluster: 'cluster-B', successRate: 75 },
      { id: 7, name: 'Service G', color: '#e5c494', borderColor: 'yellow', icon: 'path/to/redis-icon.svg', port: 6380, namespace: 'cache', cluster: 'cluster-C', successRate: 88 },
      { id: 8, name: 'Service H', color: '#b3b3b3', borderColor: 'green', icon: 'path/to/http-icon.svg', port: 8082, namespace: 'default', cluster: 'cluster-A', successRate: 96 },
  ],
  links: [
      { source: 1, target: 2, value: 10, latency: 50, invocations: 200 },
      { source: 2, target: 3, value: 5, latency: 30, invocations: 150 },
      { source: 3, target: 4, value: 15, latency: 20, invocations: 300 },
      { source: 4, target: 5, value: 8, latency: 40, invocations: 180 },
      { source: 5, target: 6, value: 20, latency: 60, invocations: 250 },
      { source: 6, target: 7, value: 6, latency: 25, invocations: 100 },
      { source: 7, target: 8, value: 9, latency: 35, invocations: 220 },
      { source: 8, target: 1, value: 11, latency: 45, invocations: 270 },
      { source: 1, target: 3, value: 7, latency: 28, invocations: 130 },
      { source: 2, target: 4, value: 10, latency: 32, invocations: 140 },
      { source: 3, target: 5, value: 12, latency: 38, invocations: 190 },
      { source: 4, target: 6, value: 4, latency: 22, invocations: 120 },
  ],
};


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: 'center', marginTop: '20px'}}>Service Graph</h1>
        <div className="graph-container">
          <ServiceGraph data={data} />
        </div>
    </div>
  );
}

export default App;
