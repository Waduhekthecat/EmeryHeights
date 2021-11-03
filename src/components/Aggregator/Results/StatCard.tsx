import React, {useState } from 'react';
import styled from 'styled-components';
import Grid from "@mui/material/Grid";
import { colors } from "../../../styles";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Details from './DetailsModal';
import ToggleButton from '@mui/material/ToggleButton';
import { makeStyles } from "@material-ui/core/styles";

// Themes //
const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1)
      }
    },
    textarea: {
      resize: "both"
    },
    HeaderToggle: {
        borderWidth: "2px",
        color: "rgb(67,159,174)",
        borderColor: "black",
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:"10px",
        fontSize:'20px',
        fontWeight:600,
        height: '56px',
    },
    Cards: {
      height: '400px',
      width:"300px",
      alignSelf: 'center',
    },  
    HeaderTheme: {
      background: "rgb(67,159,174)",
      width: "80%",
      justifyContent:"center"
    }
  })
);

// StatCard interface //
interface Props {
    platform: string,
    premium: string,
    underlying: string,
    strike: string,
    amount: string,
    expiry: string,
  };


// Modal CSS //
const style = {
  position: 'absolute' as 'absolute',
  top: '14%',
  left: '1.8%',
  width: '22%',
  height: '600px',
  zIndex: '1',
  borderRadius: '15px',
  bgcolor: '#2D93A6',
  border: '2px solid #000',
};

// Styling //
const CardContainer2 = styled.div`
  display: flex;
  background: green;
  width: 300px;
  height: 600px;
  border-radius: 20px;
  margin-top: 15px;
  margin-left: 8px;
  border: 4px 4px solid rgba(${colors.white});
  box-shadow: 14px 8px 0px 3E4251;
  @media (max-width: 1200px) {
  }
`;
const CardContainer = styled.div`
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: relative;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 8px;
  border: 4px 4px solid rgba(${colors.white});
  box-shadow: 14px 8px 0px 3E4251;
  @media (max-width: 1500px) {
    width:'400px' !important;
    height: '400px' !important;
  }
`;
const HeaderTitle = styled.h1`
  font-weight: 900;
  color: white;
  padding-right:1%;
  padding-top:0%;
  padding-left:0%;
  padding-bottom:2%;
  font-size: 22px;
  margin-left:1em;
  @media (max-width: 1200px){
    margin-left:0.6em;
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: rgb(67,159,174);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(${colors.border});
  padding:1.5em;
  margin-top: 5%;
  @media (max-width: 950px){
    width:1000px;
    height: 300px;
    flex-direction:row;
  }
`;
const CompareButton = styled(ToggleButton)`
  display: flex;
  border-width: 2px;
  border-radius: 10px;
  background: rgb(80,71,152);
  border-color: black;
  width: 80%;
  font-size:20px;
  font-weight:600;
  height: 56px;
  &:hover {
      cursor: pointer;
  }
  &:focus {
    color: rgb(${colors.selected});
  }
`;
const CompareButton2 = styled(ToggleButton)`

   height: 60%; 
   width: 50%;
   box-shadow: 8px 8px 0px 3E4251 !important;
   border-radius: 20px !important;
   margin-bottom:20px !important;
  font-size:20px;
  font-weight:600;
  box-shadow: 3px 4px 0px rgb(10, 13, 27);
  background-color: #504798 !important;
  color: rgb(256,256,256) !important;
  &:hover {
    cursor: pointer;
}
`;
const DescriptionTxt = styled.p`
color: black;
font-size: 18px;
margin-left: 1em;
`;
const DescriptionTxt2 = styled.p`
  color: black;
  font-size: 32px;
  font-weight:bold;
  margin-left: 1em;
  @media (max-width: 1200px) {
    font-size: 27px;
    margin-left:0.5em;
  }
`;
const HeadertArea = styled.div`
  width:70%;
  display: flex;
  margin-left:1em;
  margin-right:0em;
  background-color: #2D93A6;
  border-radius: 45px;
  border: 2px solid rgba(${colors.border});
  box-shadow: 3px 4px 0px rgb(10, 13, 27);
  @media (max-width: 1200px) {
    padding-left:0;
    width:65%;
  }
`;
const ButtonArea = styled.div`
  display: flex;
  justify-content: right;
  align-items: right;
  justify-content: flex-end;
  margin-top: 1em;
  margin-bottom: 0.5em;
  margin-left: 1em;
  margin-right: 0.5em;
  @media (max-width: 400px){
  }
  @media (max-height: 500px){
  }
`;

// Takes props from interface and fills the fields on the option cards with data returned from API //
// *Also declares Modal for Details card on click of select button //
const StatCard= (props: {data: Props}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    interface Props {
         platformD: String, 
         optionD: String,
         chartD: String,
         underlyingD: String, 
         strikeD: String, 
         expiryD: String,
         amountD: String, 
         gasD: String,
         countdownD: String,
         premiumD: String,
    };
    const Results: Props = {
      platformD: 'Hegic',
      optionD: 'Call',
      chartD: 'coming soon',
      underlyingD: 'BTC',
      strikeD: '61000',
      expiryD: '12/12/2021',
      amountD: '3', 
      gasD: '124 gwei',
      countdownD: '40',
      premiumD: '$1400',
    };
    
    return(
      <Grid container>   
      <CardContainer>
          <Grid container direction="column">

            {/* Platform Name */}
              <Grid item xs={12} sm={12} md={6} lg={1}>
                <DescriptionTxt2>Platform: {props.data.platform}</DescriptionTxt2>
              </Grid>
            
            {/* Premium */}
              <Grid item xs={12} sm={12} md={2} lg={1}>
                <HeadertArea>
                  <HeaderTitle>Premium: {props.data.premium}</HeaderTitle>
                </HeadertArea>
              </Grid>
            
            {/* Amount, Strike Price, and Expiry */}
              <Grid item>
                <DescriptionTxt>
                    Quantity: {props.data.amount}
                <br/>Strike: {props.data.strike}
                <br/>Expiry: {props.data.expiry}
                </DescriptionTxt>
              </Grid>
          </Grid>
      
        <Grid container>
            
            {/* Select Button */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
              <CompareButton2
                value="Select"
                selected={open}
                onClick={handleOpen}
                >{" "}
                <p style={{fontSize: 17, fontWeight: 900}}>SELECT</p>
              </CompareButton2>
            </Grid>
            
        </Grid>
      </CardContainer>
      
          {/* Details Modal declaration */}
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Modal 
                hideBackdrop={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Details results={Results}/>
                </Box>
            </Modal>
            </Grid>
        
    </Grid>
  )
};

export default StatCard