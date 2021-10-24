import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import { makeStyles, withStyles } from "@material-ui/core/styles";

interface Props {
    url: string;
    text: string;
}

const useStyles = makeStyles((theme) =>  ({
    CardImg: {
        tintColor: "#000000",
    }
})
)

const Container = styled.div`
    width: 85%;
    height: 85%;
    padding: 3em 0em;
    background: rgb(256, 256, 256);
    &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 2em teal
    }
    backdrop-filter: blur(1px);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(${colors.border});
    box-shadow: 3px 3px 3px rgba(10, 13, 27, 0.5);
    box-shadow: 0 1.5px 3px 0 rgba(${colors.border}), 0 1.5px 5px 0 rgba(${colors.border});
    box-shadow: 0 1.5px 3px 0 rgba(${colors.border}), 0 1.5px 5px 0 rgba(${colors.border});
    background: gradient(
            to bottom,
            rgba(192, 159, 87, 0.5),
            rgba(192, 159, 87, 0.5) 1px,
            transparent 0,
            transparent 1em
          );
          
    }
`
const CardImage = styled.img`
    color: black;
    width: 48px;
    height: 48px;
    background-size: contain;
    
    
`
const Description = styled.p`
    color: black;
    font-size: 18px;
    text-align: center;
    font-weight:bold
`

const Card: React.FC<Props> = ({ url, text }) => {
    const classes = useStyles();
    return (
        <Container onClick={()=>{}}>
            <CardImage src={url} className={classes.CardImg} />
            <Description>{text}</Description>
        </Container>
    )
}

export default Card
