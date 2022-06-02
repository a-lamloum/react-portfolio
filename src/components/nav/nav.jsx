import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { useState } from "react";
import Axios from "axios";

// const https = require("https");

const Nav = () => {
  // const url =
  //   "https://api.openweathermap.org/data/2.5/weather?q=Berlin&limit=5&appid=7e5e7e526a83e05fa4ab10fc01f8db78&units=metric";

  // const weatherdata = https.get(url, function (response) {
  //   console.log(response.statusCode);
  //   response.on("data", function (data) {
  //     const weaterData = JSON.parse(data);
  //     return weaterData;});
  const [temp, setTemp] = useState("");
  Axios.get(
    "https://api.openweathermap.org/data/2.5/weather?q=saarbrücken&limit=5&appid=7e5e7e526a83e05fa4ab10fc01f8db78&units=metric"
  ).then(function (response) {
    setTemp(response.data.main.temp);
  });
  const [activeClass, setActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive("#")}
        className={activeClass === "#" ? "active" : null}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive("#about")}
        className={activeClass === "#about" ? "active" : null}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={activeClass === "#experience" ? "active" : null}
      >
        <BiBookBookmark />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActive("#portfolio")}
        className={activeClass === "#portfolio" ? "active" : null}
      >
        <CgWorkAlt />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={activeClass === "#contact" ? "active" : null}
      >
        <BiMessageDetail />
      </a>
      {/* <spam>|</spam> */}
      <spam
      className="nav__weatherText"
        href="https://openweathermap.org/city/2950159"
      >
        Saar {temp}℃
      </spam>
    </nav>
  );
};

// })
// }

export default Nav;
