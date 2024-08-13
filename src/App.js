import './index.css';
import React from 'react';
import ServiceGraph from './ServiceGraph';

const data = {
  nodes: [
      { id: 1, name: 'Service A', color: '#66c2a5', borderColor: 'green', icon: 'path/to/http-icon.svg' },
      { id: 2, name: 'Service B', color: '#fc8d62', borderColor: 'red', icon: 'path/to/mysql-icon.svg' },
  ],
  links: [
      { source: 1, target: 2, value: 10 },
      { source: 2, target: 3, value: 5 },
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
