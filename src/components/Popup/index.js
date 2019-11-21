import React from "react";
import "./Popup.css"

const Popup = ({ game: { img, name, region, price } = {}, isFrench = false, closePopup }) => {
const priceSplit = price.split(',');
return <div className="popup">
    <div class="popupContent">
      <div className="popupHead">
        <div className="popImg">
          <img src={img} alt="popup" />
        </div>
        <div className="text1">
          <span className="text2">{name}</span>
          <span className="text3">{region}</span>
        </div>
      </div>
      <h2 className="priceHeading">{isFrench ? 'fijación de precios' : 'Pricing'}</h2>
      {
        priceSplit.map(pr => {
          const durationPriceSplit = pr.split("|")
          const timeSplit = durationPriceSplit[0].split(" ");
          console.log('tt', timeSplit);
          const langSplit = timeSplit[1].split(":");
          return <div className="priceContainer">
            <span>{timeSplit[0] + " " + (isFrench ? langSplit[1]: langSplit[0]) }</span>
            <span className="priceAmount">{durationPriceSplit[1]}</span>
          </div>


        })
      }
      <button onClick={() => closePopup()} className="close">{isFrench ? 'CERRAR' : 'CLOSE'}</button>
    </div>
  </div>
}

export default Popup;