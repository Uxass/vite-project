import { App } from "antd"
import React from "react"
import styled from "styled-components";
import { ARTEM_ROUTE, GENA_ROUTE, OLEG_ROUTE, VLAD_ROUTE } from "../../app/routing/config";
import { Link } from "react-router-dom";


export interface StyledProps{
    ArtemHeight?: string
    ArtemWidth?: string
    Artemsize?: string
}

const NavbarWrapper = styled.div<StyledProps>`
    height: ${({ArtemHeight}) => ArtemHeight ? ArtemHeight : '100px'};
    width: ${({ArtemWidth}) => ArtemWidth ? ArtemWidth: '1080px'};
    color: #bf8e06;
    background-color: #05538e;
    font-size: 45px;
`
const NavbarMainWrapper = styled(NavbarWrapper)`
    font-size: 45px;
`

const Navbar = () => {
    return (
        <>
        <NavbarWrapper ArtemHeight="400px" ArtemWidth="1080px">
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
        </NavbarWrapper>
        </>
    )
}
export default Navbar