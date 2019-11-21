import React from "react";
import "./Row.css"
import price from "./price.png"
import csv from "./csv.png"
import report from "./report.png"
import calendar from "./calendar.png"


const Row = ({ game: { img, name, region, date } }) => {

    const dateString = new Date(date);

    return <div>
    <div className="tableRow">
        <div className="datename blok">
            <div className="date">
                <span>
                    OCT 2019, 28
                </span>
                <span>
                    5 Days Ago
                </span>
            </div>
            <div className="name">
                <figure><img className="gameicon" src={img} alt={name} /></figure>
                <span>{name}</span>
                <span>{region}</span>
            </div>
        </div>
        <div className="pricing blok">
            <img src={price} className="act" alt={name + " price"} />
            <span>View Price</span>
        </div>
        <div className="actions blok">
            <div className="csv">
                <img src={csv} className="act" alt={name + " csv"} />
                <span>CSV</span>
            </div>
            <div className="report">
                <img src={report} className="act" alt={name + " report"} />
                <span>Report</span>
            </div>
            <div className="scheduleAgain">
                <img src={calendar} className="act" alt={name + " calendar"} />
                <span>Schedule Again</span>
            </div>
        </div>
    </div>
        <div style={{width: "90%"}} className="separator"></div>
    </div>
}

export default Row;