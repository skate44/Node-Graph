import './index.css';
import React from 'react';
import ServiceGraph from './ServiceGraph';

const data = {
  nodes: [
      { id: 1, name: 'Service A', color: '#66c2a5', borderColor: 'green', icon: 'path/to/http-icon.svg' },
      { id: 2, name: 'Service B', color: '#fc8d62', borderColor: 'red', icon: 'path/to/mysql-icon.svg' },
      { id: 3, name: 'Service C', color: '#8da0cb', borderColor: 'yellow', icon: 'path/to/redis-icon.svg' },
      { id: 4, name: 'Service D', color: '#e78ac3', borderColor: 'green', icon: 'path/to/grpc-icon.svg' },
      { id: 5, name: 'Service E', color: '#a6d854', borderColor: 'green', icon: 'path/to/http-icon.svg' },
      { id: 6, name: 'Service F', color: '#ffd92f', borderColor: 'red', icon: 'path/to/mysql-icon.svg' },
      { id: 7, name: 'Service G', color: '#e5c494', borderColor: 'yellow', icon: 'path/to/redis-icon.svg' },
      { id: 8, name: 'Service H', color: '#b3b3b3', borderColor: 'green', icon: 'path/to/http-icon.svg' },
  ],
  links: [
      { source: 1, target: 2, value: 10 },
      { source: 2, target: 3, value: 5 },
      { source: 3, target: 4, value: 15 },
      { source: 4, target: 5, value: 8 },
      { source: 5, target: 6, value: 20 },
      { source: 6, target: 7, value: 6 },
      { source: 7, target: 8, value: 9 },
      { source: 8, target: 1, value: 11 },
      { source: 1, target: 3, value: 7 },
      { source: 2, target: 4, value: 10 },
      { source: 3, target: 5, value: 12 },
      { source: 4, target: 6, value: 4 },
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
