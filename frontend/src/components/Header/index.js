import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import bell from "../../assets/bell.png";

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/">INICIO</Link>
        <div className="dividir"></div>
        <Link to="/task">NOVA TAREFA</Link>
        <div className="dividir"></div>
        <a href="#">SINCRONIZAR CELULAR</a>
        <div className="dividir"></div>
        <button onClick={clickNotification} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;
