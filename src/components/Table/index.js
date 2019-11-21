import React from "react"
import Row from "./../Row";
import "./Table.css";
import gamesData from "./gamesdata";

class Table extends React.Component {
    state = {
        game_data : gamesData,
    }
    render () {
        const { currentTab } = this.props;
        const { game_data } = this.state;
        const today = new Date();
        const todayDateString = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        return <div className="campaignTable">
        <div className="tableHeader">
            <span className="cls">DATE</span>
            <span className="cls">CAMPAIGN</span>
            <span className="cls">VIEW</span>
            <span className="cls action">ACTION</span>
        </div>
        {
            game_data.map((game)=>{  
                const _upcoming = currentTab===0 && new Date(todayDateString) < new Date(game.date);
                const _live = currentTab===1 && new Date(todayDateString) == new Date(game.date);
                const _past = currentTab===2 && new Date(todayDateString) > new Date(game.date);
                if(!_upcoming && !_live && !_past) return null;
                return <Row todayDateString={todayDateString} game={ game } />
            })
        }
        
    </div>
    }
}

export default Table;