import React from "react";
import { Switch } from "@material-ui/core";
import mvideoIcon from "../assets/Bitmap.png";
import bkIcon from "../assets/bk-icon.png"
import holod from "../assets/holod.png"
import euro from "../assets/euro.png"
import bork from "../assets/bork.png"

function PartnersCategories(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories">
          <ul className="categories-list row justify-content-center">
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Все партнеры
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Популярные
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Супермаркеты
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Кафе и рестораны
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Такси
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center">
              Красота
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center mt-2">
              Электроника и бытовая техника
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center mt-2">
              Зоотовары
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center mt-2">
              Кино и театр
            </li>
            <li className="categories-list__item col-xs-12 col-sm-6 col-md-auto text-center mt-2">
              ...
            </li>
          </ul>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-2">
            <div className="charge-bonus">Начисляют спасибо</div>
          </div>
          <div className="col-1">
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </div>
          <div className="col-2">
            <div className="take-bonus">Принимают спасибо</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="partner">
              <h4>1,5%</h4>
              <p className="partner__bonus">Спасибо от суммы покупки</p>
              <div className="partner-img">
                <img src={mvideoIcon} alt="" />
              </div>
              <p className="partner__name">
                М.Видео
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="partner">
              <h4>1,5%</h4>
              <p className="partner__bonus">Спасибо от суммы покупки</p>
              <div className="partner-img">
                <img src={bkIcon} alt="" />
              </div>
              <p className="partner__name">
                М.Видео
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="partner">
              <h4>4,5%</h4>
              <p className="partner__bonus">Спасибо от суммы покупки</p>
              <div className="partner-img">
                <img src={holod} alt="" />
              </div>
              <p className="partner__name">
                Холодильник.ру
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="partner">
              <h4>1,5%</h4>
              <p className="partner__bonus">Спасибо от суммы покупки</p>
              <div className="partner-img">
                <img src={bork} alt="" />
              </div>
              <p className="partner__name">
                Bork
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-2">
            <div className="partner">
              <h4>1,5%</h4>
              <p className="partner__bonus">Спасибо от суммы покупки</p>
              <div className="partner-img">
                <img src={euro} alt="" />
              </div>
              <p className="partner__name">
                Евросеть
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-auto">
            <button className="green-btn categories__btn">
              Еще 4 партнера
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PartnersCategories;
