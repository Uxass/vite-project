import { App } from "antd"
import React from "react"
import styled from "styled-components";


export interface StyledProps{
    ArtemHeight?: string
    ArtemWidth?: string
    Artemsize?: string
}

const NavbarWrapper = styled.div<StyledProps>`
    height: ${({ArtemHeight}) => ArtemHeight ? ArtemHeight : '100px'};
    width: ${({ArtemWidth}) => ArtemWidth ? ArtemWidth: '300px'};
    color: #ff9d15;
    font-size: 45px;
`
const NavbarMainWrapper = styled(NavbarWrapper)`
    font-size: 45px;
`

const Navbar = () => {
    return (
        <>
        <NavbarWrapper ArtemHeight="300px" ArtemWidth="300px">
        123
        </NavbarWrapper>
        </>
    )
}
export default Navbar