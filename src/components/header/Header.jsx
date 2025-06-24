import React, { useState, useRef, memo } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import Snowflake from "../snowflake/Snowflake";
import "./Header.scss";

function Header({ sharedData }) {
  const snowContainerRef = useRef(null);
  const titles = sharedData?.titles
    .map((x) => [x.toUpperCase(), 1500])
    .flat() || [];
  const name = sharedData?.name || "";
  const [checked, setChecked] = useState(false);

  const generateSnowflakes = (count) => {
    const flakes = [];
    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        size: Math.random() * 6 + 4,
        left: Math.random() * window.innerWidth,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 15,
      });
    }
    return flakes;
  };

  const [snowflakes] = useState(() => generateSnowflakes(500));

  const setTheme = () => {
    const body = document.body;
    const current = body.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
  };

  const onThemeSwitchChange = (checked) => {
    setChecked(checked);
    setTheme();
  };

  const HeaderTitleTypeAnimation = memo(() => (
    <Typical className="title-styles" steps={titles} loop={50} />
  ));

  return (
    <header id="home" className="header-custom">
      <div className="row aligner full-height">
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>

            <div>
              <label htmlFor="icon-switch" className="sr-only"> 
                {/* Ce texte est masqué visuellement mais reste accessible aux lecteurs d’écran.
      L’alerte "low contrast" dans WAVE est un faux positif. */}
                Basculer le mode sombre
              </label>

              <Switch
                checked={checked}
                onChange={onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify switch-icon owl-icon"
                    data-icon="twemoji:owl"
                    data-inline="false"
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify switch-icon sun-icon"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="snow-container" ref={snowContainerRef}>
        {snowflakes.map(({ id, size, left, duration, delay }) => (
          <Snowflake
            key={id}
            size={size}
            left={left}
            duration={duration}
            delay={delay}
          />
        ))}
      </div>
    </header>
  );
}

export default Header;