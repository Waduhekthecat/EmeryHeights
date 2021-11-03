import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styledCom from "styled-components";
import TextField from "@mui/material/TextField";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import NumberFormat from "react-number-format";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "../../styles";
import CallPutToggle from "./CallPutToggle";
import AmountSlider from "./AmountSlider";
import MuiInput from '@mui/material/Input';
import { Input, InputAdornment } from "@material-ui/core";
import { string } from "prop-types";



// Themes //
const theme = createTheme({
  palette: {
    primary: {
      main: "#46AD8D",
      contrastText: "#ffffff", //button text white instead of black
    },
    background: {
      default: "#3E4251",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    marginBottom: "5px",
    display: "flex",
    marginLeft: "10%",
    paddingLeft: "3%",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: "#1f2436",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "5%",
      padding: "5%",
    },
  },
  paper: {
    background: "red",
    color: "white",
  },
  resize: {
    fontSize:50,
  },
  textCont: {
    display: "flex",
    marginLeft: "10px",
    marginBottom: "20px",
    flexDirection: "column",
    justifyContent: "center",
  },
  textCont6: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4%",
    marginRight: "4%",
  },
  textCont3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "4%",
  },
  textContTopR: {
    display: "flex",
    flexDirection: "column",
    marginTop: "4%",
    marginLeft: "-8%",
  },
  textContTopL: {
    display: "flex",
    marginTop: "4%",
    marginLeft: "20px !important",
    flexDirection: "row",
  },
  textType: {
    display: "flex",
    marginTop: "2%",
  },
  textCont4: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "2% !important",
    marginLeft: "25%",
    marginBottom: "30px",
    paddingRight: "5% !important",
  },
  textCont1: {
    display: "flex",
    flexDirection: "column",
    
  },
  textCont8: {
    display: "flex",
    flexDirection: "column",
    marginTop: "18%",
    marginLeft: "35px",
    marginBottom: "-25%",
  },
  textContD: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "5% !important",
  },
  textCont7: {
    display: "flex",
    flexDirection: "row",
  },
  imgCont: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  progress: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
    backgroundColor: "white",
  },
  dropdown: {
    border: "1px solid black",
    backgroundColor: "#3E4251 !important",
    boxShadow: "5px 5px 5px rgba(0, 13, 27, 0.5)",
    width: "100%",
    height: "100%",
  },
  dropdownMenu: {
    color:"white important",
    backgroundColor:"#3E4251 !important"
  },
  HeaderTitle: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 70,
    display: "flex",
    color: "white",
    backgroundColor: "#5d6171",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderTitle1: {
    height: 70,
    display: "flex",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  TypeToggle: {
    width: "85% !important",
    color: "white !important",
    justifyContent: "center",
    alignItems: "center",
    height: "60 !important",
    backgroundColor: "#3e4251 !important",
    borderRadius: "3px !important",
    borderColor: "#3e4251 !important",
  },
  Tog1: {
    color: "white !important",
  },
  ItemC: {
    width: "400px !important",
    display: "flex",
    flexDirection: "column",
    "& .MuiSlider-valueLabel": {},
    marginTop: "10em",
    marginLeft: "25px",
  },
  ItemD: {
    width: "325px !important",
    display: "flex",
    flexDirection: "column",
  },
  Header: {
    width: "950px !important",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgb(31, 36, 54)",
  },
  DataPicker: {
    width: "253px !important",
    height: "55px !important",
    color: "white",
  }
}));


interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}
const StrikeArea = styled(MuiInput)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    background: "#3E4251 !important",
    color: "white !important",
    borderRadius: "5px !important",
    border: `1px solid rgba(${colors.border}) !important`,
    height: "45px",
    width: "260px",
    fontSize: 28,
    type: "number",
    paddingLeft: "1.2em",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}));
const MyNativeSelect = withStyles({
  icon: {
    weight: "800",
    width: "2.1em !important",
    height: "2.1em !important",
    fill: "white !important",
    marginTop: -10,
    color: "black !important",
    borderRadius: 10,
  },
  select: {
    fill: "#3E4251 !important",
    color: "black"
  }
})(NativeSelect);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    color: "black !important",
    background: "#3E4251 !important",
  },
  "& .MuiInputBase-input": {
    position: "relative",
    background: "#3E4251 !important",
    color: "white !important",
    borderRadius: "5px !important",
    border: `0px solid rgba(${colors.border}) !important`,
    height: 60,
    fontWeight: 600,
    fontSize: 23,
    width:'320px',
    paddingLeft: "20px",
    font: "Apple Color Emoji",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),

  },
}));
const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgb(67,159,174) !important',
      },
      '&!:hover fieldset': {
        borderColor: 'rgb(67,159,174) !important',
        cursor:'pointer'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'rgb(67,159,174) !important',
      },
      color: "white !important",
      background: "#3E4251 !important",
      marginLeft: "10px",
      borderRadius: "8px",
      marginTop: "-5px",
      width: "323px",
      height: "104px",
      padding: "6x 3px 10px 8px",
      
    },
  },
})(TextField);
const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  }
);

// Styles // 
const StyledHeader = styledCom.div`
  width: 900px;
  height: 150px; 
  padding-left:2%;
  padding-right:2%;
  border-right-radius:none;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
  background-color: rgb(31, 36, 54);
  border:9px
    rgb(${colors.gradLight});

  }
`;
const ItemContainer = styledCom.div`
  width: 400px !important; 
  height: 450px;
  display: flex;  
  flex-direction: column !important;
  padding-left:1%;
  border-right-radius:none;
  border-bottom-left-radius:20px;
  border-outline: white;
  box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
  background-color: #2D93A6;
  border:4px
    rgb(${colors.gradLight});
  @media (max-width: 720px) {
    width: 75%;
    height: 75%;
    padding-left:2%;
    padding-right:2%;
  }
`;
const ItemContainer2 = styledCom.div`
  width: 500px !important;
  height: 450px;
  display: flex;  
  flex-direction: column !important;
  padding-right:2%;
  border-left-radius:none;
  border-bottom-right-radius:20px;
  box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
  background-color: #ffffff;
  border:4px
    rgb(${colors.gradDark});
  @media (max-width: 720px) {
    width: 75%;
    height: 75%;
    padding-right:2%;
    padding-left:2%;
  }
`;
const Title1 = styledCom.p`
  font-size: 23px;
  color: black;
  margin-top:-60px;
  margin-left: 15px;
  margin-bottom:25px;
`;
const Title2 = styledCom.p`
  font-size: 23px;
  color: black;
  margin-left:15px;
  margin-top: -5px;
`;
const FooterText = styledCom.p`
  font-size: 16px;
  color: black;
  text-align:center;
  margin-top:15px;
  margin-bottom:-15px;
`;
const HeaderText = styledCom.p`
  font-size: 23px;
  color: black;
  margin-left: 15px;
  margin-top: 30px;
  width:190px
`;
const HeaderText2 = styledCom.p`
  font-size: 23px;
  color: black;
  margin-left: 30px;
  width:170px
`;
const TitleText = styledCom.p`
  margin-top: .5em;
  padding-top: 1em;
  font-size: 40px;
  text-shadow: 1px 1px 0px gray,
                1px 2px 0px blue;
  color: white;
  text-align:center;
  align-self:center;
`;
const DataPickerArea = styledCom.div`
  height:55px;
  width: 320px !important;
  display:flex;
  margin-top:12px;
  margin-bottom:5px;
  margin-left:20px;
  justify-content:center;
  align-items:center;
  @media (max-width: 550px) {
      width: 220px;
  }
`;
const QueryButton = styledCom.a`
  margin-top:9em;
  margin-left:2em;
  display: flex;
  align-self:center;
  align-items:center;
  justify-content:center;
  border-radius: 5px;
  width: 380px;
  color:white;
  font-size:20px;
  font-weight:600;
  height: 56px;
  background-color:#504798;
  &:hover {
    cursor: pointer;
    background-color: 3px solid rgb(${colors.primary});
    text-shadow: 3px 1px 0px white, 0 2 1em white, 0 0 0.2em darkblue
  }
`;

interface Props {}

// returns a form that allows query parameters to be selected for defi options //
const BannerContentDOA: React.FC<Props> = () => {

    const [value, setValue] = React.useState<Date | null>(new Date());
    const history = useHistory();
    const classes = useStyles();

    // Set state and value for form selections //
    const [underlying, setUnderlying] = useState("");
    const [expiry, setExpiry] = useState("");
    const [strike, setStrike] = useState("");
    
    const handleChange = (event: { target: { value: string } }) => {
      setUnderlying(event.target.value);
    };
    const handleChange2 = (event: { target: { value: string } }) =>{
      setExpiry(event.target.value);
    };
    const handleChange3 = (event: { target: { value: string } }) =>{
      setStrike(event.target.value);
    };
    // Array of tokens for underlying asset dropdown //
    const data = [
      "BTC",
      "BNB",
      "LUNA",
      "ETH"       
    ];

    // Creates an array of values selected in the aggregator form to submit //
    const handleQuery = () => {
      const values = [
        // option,  
        { underlying },
        { strike },
        { expiry },
        { value }
      ];
    }
    
    return ( 
      <Grid container direction="column">
        
        {/* Derivatives Aggregator title container */}
        <Grid container justifyContent="center" xs={12} sm={12} md={12} lg="auto">
          <Grid item>
            <StyledHeader>
              <TitleText>Derivatives Aggregator</TitleText>
            </StyledHeader>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="center">
            
          {/* Left side of container */}
          <ItemContainer>
            
              {/* Option type */}
              <Grid item xs={2} md={2} className={classes.textCont1}>
                <HeaderText>Option Type</HeaderText>
              </Grid>

              {/* Call/put buttons */}
              <Grid item xs={2} md={2} className={classes.textContTopL}>
                <CallPutToggle />
              </Grid>

              {/* Underlysing Asset dropdown selector*/}
              <Grid item xs={2} md={4} className={classes.textCont1}>
                <HeaderText>Underlying Asset</HeaderText>
                <DataPickerArea style={{ width: "310px" }}>
                  <FormControl variant="standard" className={classes.dropdown}>
                    <MyNativeSelect
                      value={''}
                      onChange={handleChange}
                      input={<BootstrapInput />}
                    >
                      <option className={classes.dropdownMenu} value={'10'}>
                      {data[0]}
                      </option>
                      <option className={classes.dropdownMenu} value={'20'}>
                      {data[1]}
                      </option>
                      <option className={classes.dropdownMenu} value={'30'}>
                      {data[2]}
                      </option>
                      <option className={classes.dropdownMenu} value={'40'}>
                      {data[3]}
                      </option>
                    </MyNativeSelect>
                  </FormControl>
                </DataPickerArea>
              </Grid>

              {/* Expiry date selector */}
              <Grid item xs={2} md={4} className={classes.textCont}>
                <Title2>Expiration</Title2>
                <LocalizationProvider 
                dateAdapter={AdapterDateFns}>
                  <CssTextField
                    variant="outlined"
                    value={expiry}
                    id="date"
                    type="date"
                    defaultValue="2009-01-03"
                    sx={{ width: 310, height: 55}}
                    inputProps={{style: {fontSize: 24 }}}
                    onChange={handleChange2}
                  />
                </LocalizationProvider>
              </Grid>
          </ItemContainer>
          
          {/* Right side of container */}
          <ItemContainer2>
            
            {/* Strike price text input */}
            <Grid item xs={2} md={8} className={classes.textContTopL}>
              <HeaderText2>Strike Price:</HeaderText2>
              <Grid item xs={4} md={5} className={classes.textContTopR}>
              <ThemeProvider theme={theme}>
                <StrikeArea 
                onChange={handleChange3}
                disableUnderline
                    style={{
                  marginLeft: "20px",
                  width: "160px",
                }}
                inputProps={{
                          defaultValue: 60000,
                          step: 100,
                          min: 1000,
                          max: 100000,
                          type: 'number',
                          'aria-labelledby': 'input-slider',
                        }} />
                </ThemeProvider>
              </Grid>
            </Grid>

            {/* Order amount slider  */}
            <Grid item xs={4} md={10} className={classes.textCont8}>
              <Title1>Order Amount</Title1>
              <AmountSlider />
              <FooterText>
                <ThemeProvider theme={theme}>
                  Need a larger amount? Try{" "}
                  <em
                    style={{
                      fontSize: 19,
                      color: "#139A6A",
                      fontStyle: "italic",
                      fontWeight: 900,
                    }}
                  >
                    Smart Order Routing
                  </em>
                </ThemeProvider>
              </FooterText>
            </Grid>

            {/* Query Button */}
            <Grid item xs={4} md={6} className={classes.textCont4}>
              <QueryButton
                onClick={() => {
                  history.push("/advanced");
                  //strike, underlying, expiry, amount, optiontype
                }}>
                Begin Query
              </QueryButton>
            </Grid>
          </ItemContainer2>

        </Grid>
      </Grid>
    );
  };

export default BannerContentDOA;
