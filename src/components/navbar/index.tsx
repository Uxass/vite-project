
import React, { useState } from "react"
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE } from "../../app/routing/config";
import { Link } from "react-router-dom";
import './navbar.css';

export interface StyledProps{
    ArtemHeight?: string
    ArtemWidth?: string
    Artemsize?: string
}
interface NavProps{
    setIsAuth: (value: boolean) => void;
    isAuth: boolean;
}



const Navbar: React.FC <NavProps> = ({setIsAuth, isAuth}) => {
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light')

    const changeTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', newTheme)
        setCurrentTheme(newTheme);
    }
    const AuthState = () => {
        setIsAuth(true);        
    }    

    const notAuthState = () => {
        setIsAuth(false);        
    }
    return (
      <div className="container">
        <Link to={ARTEM_ROUTE} className="link">UniversityTable</Link>
        <Link to={GENA_ROUTE} className="link">AuthForm</Link>
        <Link to={OLEG_ROUTE} className="link">FormPdf</Link>
        <button className="theme-button" onClick={() => changeTheme()}>Сменить тему</button>
        <div className="auth-buttons">
          {isAuth ? (
            <button className="auth-button" onClick={notAuthState}>
              Выход
            </button>
          ) : (
            <button className="auth-button" onClick={AuthState}>
              Вход
            </button>
          )}
          {isAuth ? <></> : <button className="register-button">Регистрация</button>}
        </div>
      </div>
    )
    
}
export default Navbar