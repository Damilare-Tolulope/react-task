import React from 'react';
import './App.css'
import Header from './components/Header'
import Block from './components/Block'
import Segment from './components/Segment';

const App: React.FC = () => {

  return (
    <div className='App'>
      <div style={metricStyle} className='metrics'>
        <Header />
        <Block />
        <Segment />
      </div>
    </div>
  );
}
const metricStyle = {
  width: '800px',
  padding: "50px",
  border: "none",
  borderRadius: "20px",
  backgroundColor: "#fff",
  margin: ' 50px auto',
}

export default App;
