//  import React from "react";
//  import styled from "styled-components";
//  import FormControlLabel from "@mui/material/FormControlLabel";
//  import Checkbox from "@mui/material/Checkbox";
//  import { makeStyles } from "@material-ui/core/styles";
//  import { Grid } from '@mui/material'
//  import { colors } from "../../../styles";
//  interface Props {
//  };
//  const useStyles = makeStyles((theme) => ({
//    checkGroup: {
//      display: "flex",
//    },
//    ButtonToggle: {
//      borderWidth: "2px",
//      borderColor: "black",
//      paddingRight: "10px",
//      color: "rgb(0,0,0) !important",
//      backgroundColor: `rgb(${colors.grey}) !important`,
//      '&:focus': {
//      color: "rgb(256,256,256) !important",
//    }},
//    Container: {
//      width:'80%',
//      height:'200px',
//      background:"white !important",
//      color: "black",
//      borderRadius: '5px',
//      display: 'flex',
//      flexDirection:'row',
//      marginTop: '25px',
//      marginLeft:'0.5em',
//      marginRight:'0.5em',
//      marginBottom: '5px',
//      paddingLeft:'3em',
//      paddingTop:'.75em',
//      paddingBottom: '.75em',
//      paddingRight: '.75em'
//    },
//    Advanced: {
//      borderColor: "black",
//      marginBottom:'15px',
//      float:'left'
//    }}));
//  const Container = styled.div`
//    width: 80%;
//    background: rgb(255,255,255);
//    color:"black";
//      border-radius: 5px;
//      display: flex;
//      flex-direction: row;
//      margin-top: 25px;
//      margin-left:0.5em;
//      margin-right:0.5em;
//      margin-bottom: 5px;
//      padding-left: 3em;
//      padding-top: .75em;
//      padding-bottom: .75em;
//      padding-right: .75em;
//      border: 1px solid rgba(${colors.border});
//      box-shadow: 2px 2px 2px rgba(10, 13, 27, 0.5);
//      &:hover {
//          box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
//          box-shadow: 0 1px 2px 0 rgba(${colors.border}), 0 1px 3px 0 rgba(${colors.border});
//          background: gradient(
//              to bottom,
//              rgba(192, 159, 87, 0.5),
//              rgba(192, 159, 87, 0.5) 1px,
//              transparent 0,
//              transparent 2em
//            );
//      }
//      @media (max-width: 720px) {
//        width: 75%;
//        height:75%;
//        padding-right:2%;
//        padding-left:2%;
//    }
//  `;
//  const Description1 = styled.p`
//    color: black;
//    font-size: 25px;
//    font-weight: 400;
//    margin-right: 20px;
//    padding: 0;
//  `;
//  const Card: React.FC<Props> = ({}) => {
//          const classes = useStyles();
//          const [selectedBtn, setSelectedBtn] = React.useState(false);
//          const [state, setState] = React.useState({
//            date: true, 
//            period: false, 
//            unchecked: false, 
//            checked: false, 
//            dunchecked: false, 
//            dchecked: false
//          });
//      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//        setState({...state, [event.target.name]: event.target.checked
//        })
//      };
//      const {date, period, unchecked, checked, dunchecked, dchecked} = state;
      
//    return (
//      <Grid container>
//          <Button className={classes.ButtonToggle} value="call" selected={selectedBtn} 
//          onClick={()=> setSelectedBtn(!selectedBtn)}>
//          {" "}<p style={{fontSize: 17, fontWeight: 800}}>Advanced</p>
//          </Button>
//          <Grid item xs={4} sm={4} md={2} lg={1}>
//              <Grid item>
//                  <Description1>Expiration<br/>Filters:</Description1>
//                  <FormControlLabel control={ <Checkbox checked={date} onChange={handleChange} name="date" />}label="Date" />
//                  <FormControlLabel control={ <Checkbox checked={period} onChange={handleChange} name="period" />}label="Period" />
//              </Grid>
//          </Grid>
//          <Grid item>
//              <Grid item>
//                <Description1>Strike Price:</Description1>
//              </Grid>
          
//              <Grid item>
//                <FormControlLabel control={<Checkbox checked={dchecked} onChange={handleChange} name="round up" />}label="Round Up" />
//                <FormControlLabel control={<Checkbox checked={dunchecked} onChange={handleChange} name="exact match" />}label="Exact Match" />
//              </Grid>
//              <Grid item>
//                <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} name="round down"/>}label="Round Down" />
//                <FormControlLabel control={<Checkbox checked={unchecked} onChange={handleChange} name="display all" />}label="Display All" />
//              </Grid>
//          </Grid>  
//      </Grid>    
//    )
//  }; 
//  export default Card




export {}