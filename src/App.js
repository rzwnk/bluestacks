import React from 'react';
import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"

class App extends React.Component {
  state = {
    currentTab : 0,
    mobile: false
  }

  componentDidMount() {
    window.addEventListener('resize', ()=>{
      this.setState({mobile: this.detectmob()})
    });
    this.setState({mobile: this.detectmob()})
  }

  detectmob() {
    if(window.innerWidth <= 700) {
      return true;
    } else {
      return false;
    }
 }


  render () {
    const {currentTab, mobile} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="heading"><div>Manage {!mobile && "Campaigns"}</div></div>
        <div className="campaigns-tabs">
          <div className={"switch "+ (currentTab===0 ? "active" : "") } onClick={()=>this.setState({currentTab:0})}  >Upcoming {!mobile && "Campaigns"}</div>
          <div className={"switch "+( currentTab===1 ? "active" : "") } onClick={()=>this.setState({currentTab:1})} >Live {!mobile && "Campaigns"}</div>
          <div className={"switch "+( currentTab===2 ? "active" : "") } onClick={()=>this.setState({currentTab:2})} >Past {!mobile && "Campaigns"}</div>
        </div>
        <div className="separator"></div>
        <Table currentTab={currentTab} />
      </div>
    );
  }
}

export default App;
