import React from "react"
import Row from "./../Row";
import "./Table.css";
import gamesData from "./gamesdata";

const Table = () => {
    return <div className="campaignTable">
        <div className="tableHeader">
            <span className="cls">DATE</span>
            <span className="cls">CAMPAIGN</span>
            <span className="cls">VIEW</span>
            <span className="cls action">ACTION</span>
        </div>
        {
            gamesData.map(game=>{
                return <Row game={game}/>
            })
        }
        
    </div>
}

export default Table;