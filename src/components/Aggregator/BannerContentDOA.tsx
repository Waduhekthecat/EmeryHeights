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
import StrikeInput from "./StrikeInput";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "../../styles";
import CallPutToggle from "./CallPutToggle";
import AmountSlider from "./AmountSlider";
import { Input, InputAdornment } from "@material-ui/core";
import { string } from "prop-types";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MyNativeSelect = withStyles({
  icon: {
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
    borderRadius: "10px !important",
    border: `1px solid rgba(${colors.border}) !important`,
    height: 60,
    fontSize: 21,
    paddingLeft: "20px",
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
      '&:hover fieldset': {
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
      width: "310px",
      height: "100px",
      padding: "10px 10px 10px 10px",
      
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

interface State {
  numberformat: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "#ffffff",
  border: "1px solid #000",
  borderRadius: 5,
  boxShadow: 24,
};

// Material ui style
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

// styled-components
const StyledHeader = styledCom.div`
width: 900px;
height: 120px; 
padding-left:2%;
padding-right:2%;
border-right-radius:none;
border-top-left-radius:20px;
border-top-right-radius:20px;
box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
background-color: rgb(31, 36, 54);
}
`;
const ItemContainer = styledCom.div`
    width: 400px !important; 
    height: 450px;
    display: flex;  
    flex-direction: column !important;
    padding-left:2%;
    border-right-radius:none;
    border-bottom-left-radius:20px;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
    background-color: rgb(67,159,174);
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
    @media (max-width: 720px) {
        width: 75%;
        height: 75%;
        padding-right:2%;
        padding-left:2%;
    }
`;
const Title = styledCom.p`
    font-size: 23px;
    color: black;
    margin-top:50px;
`;
const Title1 = styledCom.p`
    font-size: 23px;
    color: black;
    margin-top:-80px;
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
    margin-left:10px;
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
    margin-left: 15px;
    width:170px
`;
const TitleText = styledCom.p`
    margin-top: 1em;
    padding-top: 1em;
    font-size: 35px;
    text-shadow: 1px 1px 1px white,
               1px 2px 1px gray;
    color: white;
    text-align:center;
    align-self:center;
`;

const DataPickerArea = styledCom.div`
    height:55px;
    width:400px;
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
    margin-left:1em;
    display: flex;
    align-self:center;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    width: 210px;
    color:white;
    font-size:20px;
    font-weight:600;
    height: 56px;
    background-color:#504798;
    &:hover {
      cursor: pointer;
      border: 1px solid rgb(${colors.fontColor});
      text-shadow: 1px 1px 2px white, 0 0 1em white, 0 0 0.2em darkblue
  }
    
`;

    interface Props {}

    const BannerContentDOA: React.FC<Props> = () => {
      const [value, setValue] = React.useState<Date | null>(new Date());

      const history = useHistory();
      const classes = useStyles();
      const [expiry, setExpiry] = useState("");
      const [underlying, setUnderlying] = useState("");

      const data = [
        "BTC",
        "BNB",
        "LUNA",
        "ETH"       
      ]

  
      const handleChange = (event: { target: { value: string } }) =>{
        setUnderlying(event.target.value);
      };
      const handleChange2 = (event: { target: { value: string } }) => {
        setExpiry(event.target.value);
      };

        
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

      return (
        <Grid container direction="column">
          <Grid container justifyContent="center" xs={12} sm={12} md={12} lg="auto">
            <Grid item>
              <StyledHeader>
                <TitleText>Derivatives Aggregator</TitleText>
              </StyledHeader>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Grid item>
              <ItemContainer>
                <Grid item xs={2} md={2} className={classes.textCont1}>
                  <HeaderText>Option Type</HeaderText>
                </Grid>
                <Grid item xs={2} md={2} className={classes.textContTopL}>
                  <CallPutToggle />
                </Grid>
                <Grid item xs={2} md={5} className={classes.textCont1}>
                  <HeaderText>Underlying Asset</HeaderText>
                  <DataPickerArea style={{ width: "310px" }}>
                    <FormControl variant="standard" className={classes.dropdown}>
                      <MyNativeSelect
                        value={underlying}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                      >
                        <option className={classes.dropdownMenu} value={10}>
                        {data[0]}
                        </option>
                        <option className={classes.dropdownMenu} value={20}>
                        {data[1]}
                        </option>
                        <option className={classes.dropdownMenu} value={30}>
                        {data[2]}
                        </option>
                        <option className={classes.dropdownMenu} value={40}>
                        {data[3]}
                        </option>
                      </MyNativeSelect>
                    </FormControl>
                  </DataPickerArea>
                </Grid>
                <Grid item xs={2} md={4} className={classes.textCont}>
                  <Title2>Expiration</Title2>
                  <LocalizationProvider 
                  dateAdapter={AdapterDateFns}>
                    <CssTextField
                      variant="outlined"
                      id="date"
                      type="date"
                      defaultValue="2009-01-03"
                      sx={{ width: 310, height: 55}}
                      inputProps={{style: {fontSize: 24 }}}
                    />
                  </LocalizationProvider>
                </Grid>
              </ItemContainer>
            </Grid>
            <ItemContainer2>
              <Grid item xs={2} md={8} className={classes.textContTopL}>
                <HeaderText2>Strike Price:</HeaderText2>
                {/*Strike Price Input*/}
                <Grid item xs={2} md={4} className={classes.textContTopR}>
                  <StrikeInput />
                </Grid>
              </Grid>
              <Grid item xs={4} md={10} className={classes.textCont8}>
                <Title1>Order Amount</Title1>
                <AmountSlider />
                <FooterText>
                  <ThemeProvider theme={theme}>
                    Need a larger amount? Try{" "}
                    <em
                      style={{
                        fontSize: 18,
                        textDecoration: "underline",
                        color: "#439fae",
                        fontStyle: "italic",
                        fontWeight: 500,
                      }}
                    >
                      Smart Order Routing
                    </em>
                  </ThemeProvider>
                </FooterText>
              </Grid>
              <Grid item xs={4} md={6} className={classes.textCont4}>
                <QueryButton
                  onClick={() => {
                    history.push("/advanced");
                  }}
                >
                  Begin Query
                </QueryButton>
              </Grid>
            </ItemContainer2>
          </Grid>
        </Grid>
      );
    };

export default BannerContentDOA;
