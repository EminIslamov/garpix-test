import React from "react";
import { ReactSVG } from "react-svg";
import sberIcon from "../assets/logo_x2 1.svg";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import triangle from "../assets/Triangle-2.svg";
import search from "../assets/search.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <div className="row justify-content-between">
            <div className="col-2">
              <div className="sber-icon">
                <ReactSVG src={sberIcon} />
              </div>
            </div>
            <div className="col-8">
              <nav>
                <ul className="menu row">
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Купоны и сертификаты</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Впечатления</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Авиабилеты</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Ж/д билеты</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Отели</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Каршеринг</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Театры</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Страхование</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Как подключиться</a>
                  </li>
                  <li className="menu__item col-xs-12 col-sm-6 col-md-auto">
                    <a href="/">Партнеры</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-2">
              <div className="sign-in-geo-and-search-block">
                <div className="row justify-content-end">
                  <div className="col-1">
                    <div className="sign-in">
                      <ReactSVG src={triangle} />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="sign-in-geo-and-search-block__city">
                      Санкт-Петербург
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-3">
                    <ReactSVG src={search} />
                  </div>
                  <div className="col-8">
                    <button className="sign-in-button">Войти</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
