import React, {useState } from 'react';
import styled from 'styled-components';
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { white } from 'material-ui/styles/colors';
import Typography from 'material-ui/styles/typography';


//rgb(75,169,156) teal rgb(108,81,152) purp rgb(84,87,104) gray//

const useStyles = makeStyles((theme) => ({
    HeaderArea: {
        backgroundColor: 'rgb(67, 159, 174)'
    },
    AmountArea: {
        color: 'white',
        height: '70px',
        fontSize: '60px',
        Weight: 900,
        marginLeft: '10%',
        marginTop: '10%'
    },
    PlatformArea: {
        color: 'white',
        textSize: '40px',
        marginLeft: '11.5%'
    },
    

}));
    

const Title = styled.p`
margin: 0 'auto';
color: white;
font-size: 30px;
font-weight: 600;
direction:"column"
display:"flex"
justify:"center"

`;
const Title2 = styled.p`
margin: 0 'auto';
color: white;
font-size: 50px;
font-weight: 900;
direction:"column";
display:"flex";
justify:"center";
margin-top:75px;

`;
const Title3 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex"
justify:"center"

`;

const Data = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 50px !important;
`;
const Data2 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 50px !important;
`;
const Data3 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 40px !important;
`;
const Data4 = styled.p`
margin: 0 'auto';
color: white;
font-size: 22px;
font-weight: 600;
direction:"column"
display:"flex";
justify:"center";
margin-top: 40px !important;
`;

const CancelButton = styled(Button)`
    height: 65px; 
    width: 150px;
    size: large;
    justify: 'center';
    margin-left:210px !important;
    margin-bottom:115px !important;
    font-size: '30px' !important;
    font-weight:'900' !important;
    background-color: none !important;
    color: Red !important;
    &:hover {
    cursor: pointer;
    }
  
}`;



const ConfirmButton = styled(Button)`
    height: 125px !important; 
    width: 215px !important;
    box-shadow: 8px 8px 0px 3E4251 !important;
    border-radius: 5px !important;
    margin-bottom:115px !important;
    margin-left:160px !important;
    justify: 'center';
    font-size:20px;
    font-weight:600;
    box-shadow: 3px 4px 0px rgb(10, 13, 27);
    background-color: #504798 !important;
        color: rgb(256,256,256) !important;
    &:hover {
        cursor: pointer;

}`;

interface Props {
}

const PurchaseModal= (props: {submit: Props}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit = () => { };
    const classes = useStyles();



    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" justifyContent="center">
    
    </Grid>


    return (
        <div>
            <Grid container className={classes.HeaderArea} justifyContent="center" xs={12} sm={12} md={12} lg="auto">
                <Grid item > 
                    <Title> Confirm your purchase </Title>
                </Grid>
            </Grid>

            <Grid container direction="row" >
                    <Grid item className={classes.AmountArea} md={4} direction="column" sx={{fontSize:'40px'}} display="flex" alignItems="center" justifyContent="center">
                    <Title2 className={classes.AmountArea}>0.5 BTC</Title2>
                    </Grid>
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" justifyContent="center">
                    <Data>Contract Type: Call</Data>
                    </Grid>
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" justifyContent="center">
                    <Data2>Strike Price: $48,000 </Data2>
                    </Grid>
            </Grid>
            
            <Grid container direction="row">
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" justifyContent="center">
                    <Title3 className={classes.AmountArea}>Platform Y</Title3>
                    </Grid>
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" justifyContent="center">
                    <Data3>Order Quanitity: 2</Data3>
                    </Grid>
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" justifyContent="center">
                    <Data4>Expiry: 09/24/2021</Data4>
                    </Grid>
            </Grid>

            
            <Grid container direction="row" spacing = {1}>
                    <Grid item md={4}>
                    </Grid>
                <Grid item className={classes.AmountArea} md={3} direction="column" display="flex" alignItems="center" sx={{ marginTop: "14%", marginLeft:"1%" }} justifyContent= "center">
                    <CancelButton onClick={handleClose}> Cancel </CancelButton>
                    </Grid>
                    <Grid item className={classes.AmountArea} md={4} direction="column" display="flex" alignItems="center" sx={{ marginTop: "14%" }}justifyContent="center">
                    <ConfirmButton onClick={handleSubmit}> Confirm Purchase
                    </ConfirmButton>
                    </Grid>
            </Grid>
        </div>
      
    )
};
      
export default PurchaseModal