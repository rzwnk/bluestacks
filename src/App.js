import React from 'react';
import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"

class App extends React.Component {
  state = {
    currentTab : 0
  }
  render () {
    const {currentTab} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="heading"><div>Manage Campaigns</div></div>
        <div className="campaigns-tabs">
          <div className={"switch "+ (currentTab===0 ? "active" : "") } onClick={()=>this.setState({currentTab:0})}  >Upcoming Campaigns</div>
          <div className={"switch "+( currentTab===1 ? "active" : "") } onClick={()=>this.setState({currentTab:1})} >Live Campaigns</div>
          <div className={"switch "+( currentTab===2 ? "active" : "") } onClick={()=>this.setState({currentTab:2})} >Past Campaigns</div>
        </div>
        <div className="separator"></div>
        <Table currentTab={currentTab} />
      </div>
    );
  }
}

export default App;
