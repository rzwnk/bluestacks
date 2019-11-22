import React from 'react';
import './App.css';
import Header from "./components/Header"
import Table from "./components/Table"

class App extends React.Component {
  state = {
    currentTab : 0,
    mobile: false,
    language: 'en'
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

 langToggle = (e) => {
   const {value} = e.target;
   this.setState({language: value})
 }

  render () {
    const {currentTab, mobile, language} = this.state;
    return (
      <div className="App">
        <Header  langToggle={this.langToggle} language={language} />
        <div className="heading"><div>{`${language=='en' ? "Manage" : "Gérer"}`} {!mobile && `${language=='en' ? "Campaigns" : "Campagnes"}` }</div></div>
        <div className="campaigns-tabs">
          <div className={"switch "+ (currentTab===0 ? "active" : "") } onClick={()=>this.setState({currentTab:0})}  >{`${language=='en' ? "Upcoming" : "Prochaine"}`} {!mobile && `${language=='en' ? "Campaigns" : "Campagnes"}` }</div>
          <div className={"switch "+( currentTab===1 ? "active" : "") } onClick={()=>this.setState({currentTab:1})} >{`${language=='en' ? "Live" : "vivre"}`} {!mobile && `${language=='en' ? "Campaigns" : "Campagnes" }`  }</div>
          <div className={"switch "+( currentTab===2 ? "active" : "") } onClick={()=>this.setState({currentTab:2})} >{`${language=='en' ? "Past" : "passé"}`} {!mobile &&  `${language=='en' ? "Campaigns" : "Campagnes"}`  }</div>
        </div>
        <div className="separator"></div>
        <Table language={language} mobile={mobile} currentTab={currentTab} />
      </div>
    );
  }
}

export default App;
