import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'


interface MenuAreaProps {
    displayMenu: boolean;
    openMenu: () => void;
}

interface MenuContainerProps {
    status: boolean;
}

const MenuContainer = styled.ul<MenuContainerProps>`
    width:100%;
    justify-content:end;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-in-out;
    @media (max-width: 960px) {
        flex-direction: column;
        transform: translateY(${props => props.status ? '-250%' : '40%'});
        background: rgb(${colors.main});
        opacity: 0.9;
        width: 100%;
        position: absolute;
        z-index: 10;
        border-radius: 20px;
        border: 1px solid rgba(${colors.border});
        margin-top:70px;
    }
`
const MmenuItem = styled.li`
    color: rgb(${colors.black});
    font-size: 20px;
    font-weight: 400;
    margin: 0 1em;
    background-color:rgb(255, 255, 255);
    padding: 0.5em 1.5em;
    border-radius:0.2em;
    @media (max-width: 1100px) {
        margin: 0 0.3em;
    }
    @media (max-width: 960px) {
        margin: 0.5em 0;
    }
    &:hover {
        cursor: pointer;
        text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
    }
`

const MenuArea: React.FC<MenuAreaProps> = ({ displayMenu, openMenu }) => {
    return (
        <MenuContainer status={displayMenu}>
            <MmenuItem  onClick={openMenu}>Connect Wallet</MmenuItem>
        </MenuContainer>
    )
}

export default MenuArea
