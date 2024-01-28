import React from "react";
import Popup from "reactjs-popup";
import Gpay from '../../assets/Gpay.jpg'
import CoffeeCup from "../../assets/coffee.png";
import './CoffeeDialog.css'

export default () => (
  <Popup className="custom__popup"
    trigger={<span className="button"> Buy me a Coffee </span>}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header">
          <span>Thank you for your support </span>
        </div>
        <div className="content">
          <img src={Gpay} alt="Gpay" />
        </div>
        {/* <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            nested
          ></Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div> */}
      </div>
    )}
  </Popup>
);
