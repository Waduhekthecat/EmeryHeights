import React from 'react'
import styled from 'styled-components'
import menu from '../../assets/images/menu.png'
import telegram from '../../assets/images/telegram.png'

interface SocialAreaProps {
}
const SocialContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 2em;
    @media (max-width: 960px) {
        display: none;
    }
`

const SocialIcon = styled.img`
    width: 40px;
    height: 20px;
    margin: 0 1em;
    background-size: contain;
    &:hover {
        cursor: pointer;
    }
`

const SocialLinkArea: React.FC<SocialAreaProps> = () => {
    return (
        <SocialContainer>
            <SocialIcon src={menu} />
            {/* <SocialIcon src={telegram} /> */}
        </SocialContainer>
    )
}

export default SocialLinkArea
