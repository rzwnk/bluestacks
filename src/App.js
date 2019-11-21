import React from 'react';
import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="heading"><div>Manage Campaigns</div></div>
      <div className="campaigns-tabs">
        <div className="switch">Upcoming Campaigns</div>
        <div className="switch">Live Campaigns</div>
        <div className="switch">Past Campaigns</div>
      </div>
      <div className="separator"></div>
      <Table />
    </div>
  );
}

export default App;
