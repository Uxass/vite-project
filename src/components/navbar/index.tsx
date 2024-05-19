/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface NavProps {
  setIsAuth: (value: boolean) => void;
  isAuth: boolean;
}

const Navbar: React.FC<NavProps> = ({ setIsAuth, isAuth }) => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };
  const AuthState = () => {
    setIsAuth(true);
  };

  const notAuthState = () => {
    setIsAuth(false);
  };
  return (
    <div>
      <Link to="/personinfo">PERSONINFO</Link>
      <Link to="/artem">UniversityTable</Link>
      <Link to="/gena">AuthForm</Link>
      <Link to="/oleg">FormPdf</Link>
      <button onClick={changeTheme}>Сменить тему</button>
      <div>
        {isAuth ? <button onClick={notAuthState}>Выход</button> : <button onClick={AuthState}>Вход</button>}
        {isAuth ? null : <button>Регистрация</button>}
      </div>
    </div>
  );
};
export default Navbar;
