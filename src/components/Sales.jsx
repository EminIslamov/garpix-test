import React from "react";
import bkIcon from "../assets/colls2.png";
import megafonIcon from "../assets/megafon.png";
import iviIcon from "../assets/ivi.png";
import republicIcon from "../assets/republic.png";
import pyaterochkaIcon from "../assets/pyaterochka.png";

function Sales(props) {
  return (
    <section className="sales-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="section__row">
            <div className="row justify-content-center">
              <div className="col-md-auto">
               <div className="sales__icon"><img className="icon" src={bkIcon} alt="" /></div>
              </div>
              <div className="col-md-auto">
                <div className="sales__icon"><img className="icon" src={pyaterochkaIcon} alt="" /></div>
              </div>
              <div className="col-md-auto">
                <div className="sales__icon"><img className="icon" src={republicIcon} alt="" /></div>
              </div>
              <div className="col-md-auto">
                <div className="sales__icon"><img className="icon" src={megafonIcon} alt="" /></div>
              </div>
              <div className="col-md-auto">
                <div className="sales__icon"><img className="icon" src={iviIcon} alt="" /></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sales;
