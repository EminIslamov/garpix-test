import React from "react";
import techparkPic from "../assets/tech-park-pic.png";
import euroBFriday from "../assets/euro-black-friday.png";
import mVideo from "../assets/m-video.png";
import smallTechIcon from "../assets/partner-small1.png"

function Offers(props) {
  return (
    <section className="offers">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="offer__title">
              3 предложения в категории «Электроника и бытовая техника»
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="offers__pics-row-block">
          <div className="row justify-content-center">
            <div className="col-md-auto col-sm-12">
              <div className="offer__img">
                <img src={techparkPic} alt="techparkPic" />
              </div>
            </div>
            <div className="col-md-auto col-sm-12">
              <div className="offer__img">
                <img src={euroBFriday} alt="techparkPic" />
              </div>
            </div>
            <div className="col-md-auto col-sm-12">
              <div className="offer__img">
                <img src={mVideo} alt="techparkPic" />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <button className="green-btn offers__btn">
              Еще 4 предложения
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
