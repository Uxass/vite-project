import { App } from "antd"
import React, { useState } from "react"
import styled from "styled-components";
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE, VLAD_ROUTE } from "../../app/routing/config";
import { Link } from "react-router-dom";


export interface StyledProps{
    ArtemHeight?: string
    ArtemWidth?: string
    Artemsize?: string
}

const NavbarWrapper = styled.div<StyledProps>`
    height: ${({ArtemHeight}) => ArtemHeight ? ArtemHeight : '500px'};
    width: ${({ArtemWidth}) => ArtemWidth ? ArtemWidth: '1200px'};
    color: #bf8e06;
    background-color: #05538e;
    font-size: 45px;
`
const NavbarMainWrapper = styled(NavbarWrapper)`
    font-size: 45px;
`

const Navbar = () => {
    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light')

    const changeTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        document.documentElement.setAttribute('data-theme', newTheme)
        setCurrentTheme(newTheme);
    }


    
    return (
        <>
        <NavbarWrapper ArtemHeight="500px" ArtemWidth="1200px">
          <Link to={ARTEM_ROUTE}>ARTEM_ROUTE</Link>
          <br></br>
          <Link to={ARTEM_ROUTE + '/2'}>Открыть Артема - v2</Link>
          <br></br>
          <Link to={VLAD_ROUTE}>VLAD_ROUTE</Link>
          <br></br>
          <Link to={GENA_ROUTE}>GENA_ROUTE</Link>
          <br></br>
          <Link to={OLEG_ROUTE}>OLEG_ROUTE</Link>
          <br></br>
          <button onClick={() => changeTheme()}>Сменить тему</button>
          <button onClick={() => useState()}>Авторизация</button>
        </NavbarWrapper>
        </>
    )
}
export default Navbar