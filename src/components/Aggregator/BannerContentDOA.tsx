import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import styledCom from "styled-components";
import calendarIcon from "../../assets/images/calendarIcon.png";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
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

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MyNativeSelect = withStyles({
  icon: { 
    width: "2em !important",
    height: "2em !important",
    marginTop: -10,
    color: "white !important",
    borderRadius: 10,
  },
  
})(NativeSelect);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    background: "#3E4251 !important",
    color: "white !important",
    borderRadius: "10px !important",
    border: `1px solid rgba(${colors.border}) !important`,
    height: 60,
    fontSize: 21,
    paddingLeft: "10px",
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
    "&:focus": {
      borderRadius: 4,
    },
  },
}));

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
    width: "70%",
    marginBottom: "5px",
    display: "flex",
    marginLeft: "15%",
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
  textCont: {
    display: "flex",
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
    border: '1px solid black',
    boxShadow: '5px 5px 5px rgba(0, 13, 27, 0.5)',
    width: "100%",
    height: "100%",
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
    flexDirection: "column", '& .MuiSlider-valueLabel': {
  },
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
  backgroundColor: 'rgb(31, 36, 54)'
  }
}));

// styled-components
const ItemContainer = styledCom.div`
    width: 400px !important; 
    height: 450px;
    display: flex;  
    flex-direction: column !important;
    padding-left:2%;
    margin-top:0em;
    margin-left:26.2em;
    border-right-radius:none;
    border-bottom-left-radius:20px;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
    background-color: rgb(67,159,174);
    @media (max-width: 720px) {
        width: 75%;
        height:75%;
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
    margin-top:0em;
    margin-left:74.9px;
    border-left-radius:none;
    border-bottom-right-radius:20px;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
    background-color: #ffffff;
    @media (max-width: 720px) {
        width: 75%;
        height:75%;
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
    margin-left:-10px;
`;
const Title2 = styledCom.p`
    font-size: 23px;
    color: black;
    margin-left:15px;
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
    font-size: 35px;
    color: white;
    text-align:center;
    align-self:center;
`;
const ButtonContainer1 = styledCom.div`
    width: 225px;
    display: flex;
    margin-bottom:30px;
    margin-left:10px;
    @media (max-width: 550px) {
        width: 100%;
        margin-left:0;
    }
`;

const DataPickerArea = styledCom.div`
    height:55px;
    width:380px;
    display:flex;
    margin-top:12px;
    margin-bottom:5px;
    margin-left:10px;
    justify-content:center;
    align-items:center;
    @media (max-width: 550px) {
        width: 220px;
    }
`;
const DataPickerArea1 = styledCom.div`
    height:55px;
    width:380px;
    display:flex;
    margin-bottom:5px;
    justify-content:center;
    align-items:center;
    @media (max-width: 550px) {
        width: 220px;
    }
`;
const DataPicker = styledCom.input`
    background: rgba(255, 255, 255, 1.0);
    padding-left:0.5em;
    width:253px !important;
    height:55px !important;
    font-size:20px !important;
    border-radius:10px;
    color: white;
    border: none;
`;

const StyledHeader = styledCom.div`
width: 865px !important; 
height: 120px; 
flex-direction: column;
align-self:center;
padding-left:2%;
padding-right:2%;
margin-top:0em;
margin-left:26.2em;
margin-right:26.2em;
border-right-radius:none;
border-top-left-radius:20px;
border-top-right-radius:20px;
box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
background-color: rgb(31, 36, 54);
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
    width: 375px;
    color:white;
    font-size:20px;
    font-weight:600;
    height: 56px;
    background-color:rgb(94,108,250);
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background-color:rgb(94,108,250)
    }
`;

interface Props {}

const BannerContentDOA: React.FC<Props> = () => {
  const [values, setValues] = React.useState<State>({
    numberformat: "1320",
  });
  const history = useHistory();
  const classes = useStyles();
  const [age, setAge] = useState("");
  const birthdayHandler = () => {};

  const handleChange2 = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#46AD8D",
        contrastText: "#fff", //button text white instead of black
      },
      background: {
        default: "#394764",
      },
    },
  });

  return (
  <>
  <Grid 
  container direction="column" >
    <StyledHeader className={classes.Header}>
    <TitleText>Derivatives Aggregator
    </TitleText>
      </StyledHeader>
    <Grid container direction="row"
    alignItems="center">
      <Grid item md={5}>
        <ItemContainer className={classes.ItemD}>
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
                  value={age}
                  onChange={handleChange2}
                  input={<BootstrapInput />}
                >
                  <option color="white" value={10}>WBTC</option>
                  <option color="white" value={20}>USDC</option>
                  <option color="white" value={30}>ETH</option>
                  <option color="white" value={20}>USDT</option>
                </MyNativeSelect>
              </FormControl>
            </DataPickerArea>
          </Grid>
          <Grid item xs={2} md={4} className={classes.textCont}>
            <Title2>Expiration</Title2>
            <ButtonContainer1>
              <DataPickerArea1>
                <DataPicker
                  onChange={birthdayHandler}
                  name="birthday"
                  type="date"
                  className="timepickerInput"
                  placeholder="Date of Birth" 
                />
                <img src={calendarIcon} alt="arrow" width="20" height="12" style={{marginRight:20}} />
              </DataPickerArea1>
            </ButtonContainer1>
          </Grid>
        </ItemContainer>
      </Grid>
      <Grid item md={5}>
        <ItemContainer2 className={classes.ItemC}>
        <Grid item xs={2} md={8} className={classes.textContTopL}>
           <HeaderText2>Strike Price</HeaderText2>
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
                Need a larger amount?     Try{" "}
                <em
                  style={{
                    fontSize: 18,
                    textDecoration: "underline",
                    color: "#05e400",
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
    </Grid>
    </>
  );
};

export default BannerContentDOA;
