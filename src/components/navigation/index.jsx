import React from "react";
import config from "../../config.json";
import "./style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <nav>
          <div>
            <a href="/">
              <img src="" alt="" />
              <span className="nav-app-version">
                {config.appName || "Devecom"}
              </span>
              <span className="nav-app-name">
                {config.appVersion || "1.0.0"}
              </span>
            </a>
          </div>
          <div className="nav-items">
            {/* prettier-ignore */}
            <ul>
            <li><a href="/">
              <span className="item-icon"></span>
              <span className="item-text">Inicio</span>
              </a></li>
            <li><a href="/trending">
              <span className="item-icon"></span>
              <span className="item-text">Tendencia</span>
              </a></li>
            <li><a href="/users">
              <span className="item-icon"></span>
              <span className="item-text">Usuarios</span>
              </a></li>
            <li><a href="/about">
              <span className="item-icon"></span>
              <span className="item-text">Acerca de</span>
              </a></li>
          </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
