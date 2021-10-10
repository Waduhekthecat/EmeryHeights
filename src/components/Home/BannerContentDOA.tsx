import React, { ReactComponentElement, useState } from "react";
import Grid from "@material-ui/core/Grid";
import styledCom from "styled-components";
import calendarIcon from "../../assets/images/calendarIcon.png";
import { makeStyles, styled, withStyles } from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import AmountInput from "./AmountInput";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { colors } from "../../styles";
import CallPutToggleButton from "../CallPutToggleButton";
import AmountSlider from "./AmountSlider";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const MyNativeSelect = withStyles({
  icon: {
    color: "white !important",
    width: "2em !important",
    height: "2em !important",
    marginTop: -10,
  },
})(NativeSelect);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#3e4251",
    height: 60,
    //   border: '1px solid #ced4da',
    fontSize: 21,
    color: "white",
    paddingLeft: "10px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
  bgcolor: "#1f2436",
  border: "0px solid #000",
  borderRadius: 5,
  boxShadow: 24,
};

// Material ui style
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
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
    justifyContent: 'space-between',
    paddingRight: "5% !important",
  },
  textCont4: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "2% !important",
    paddingRight: "5% !important",
  },
  textCont1: {
    display: "flex",
    flexDirection: "column",
    paddingRight: "5% !important",
  },
  imgCont: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    width: "100%",
    height: "100%",
    background: "#ccd2dc",
    opacity: "0.3",
    borderRadius: 10,
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
}));

// styled-components
const ItemContainer = styledCom.div`
    width: 900px;
    height: 500px;
    margin: auto;
    display: flex;  
    flex-direction: column;
    padding-left:2%;
    margin-top:10em;
    margin-left:28em;
    border-radius:20px;
    box-shadow: 5px 5px 5px rgba(10, 13, 27, 0.6);
    background-color: rgba(51, 50, 102, 0.87);
    @media (max-width: 720px) {
        width: 75%;
        height:75%;
        padding-left:2%;
        padding-right:2%;
    }
`;
const Title = styledCom.p`
    font-size: 25px;
    color: white;
    margin-top:50px;
`;
const FooterText = styledCom.p`
    font-size: 17px;
    color: white;
    text-align:center;
    margin-top:15px;
    margin-bottom:-15px;
`;
const ButtonContainer1 = styledCom.div`
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-bottom:30px;
    @media (max-width: 550px) {
        width: 100%;
        margin-left:0;
    }
`;
const CalendarImage = styledCom.img`
    width: 35px;
    height: 35px;
    background-size: contain;
`;
const CalendarImageArea = styledCom.div`
    width:60px;
    height:60px;
    border-radius:10px;
    margin-right:0.5em;
    background-color: rgb(62,66,81);
    display:flex;
    justify-content:center;
    align-items:center;
`;
const DataPickerArea = styledCom.div`
    background-color: rgb(63,66,81);
    border-radius:10px;
    height:60px;
    width:380px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 550px) {
        width: 220px;
    }
`;
const DataPicker = styledCom.input`
    background-color: rgb(63,66,81);
    padding-left:0.5em;
    width:360px;
    border-width:0px;
    font-size:20px !important;
    color: white;
    border-color: rgb(63,66,81);
`;
const QueryButton = styledCom.a`
    margin-top:4em;
    display: flex;
    align-self:center;
    align-items:center;
    justify-content:center;
    border-radius: 10px;
    width: 80%;
    color:white;
    font-size:20px;
    font-weight:600;
    height: 60px;
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
    <ItemContainer>
      <Grid container spacing={1}>
        <Grid item xs={4} md={6} className={classes.textCont}>
          <Title>Option Type</Title>
          <CallPutToggleButton />
          </Grid>
          <Grid item xs={4} md={6} className={classes.textCont}>
          <Title>Strike Price</Title>
          <AmountInput />
          </Grid>
          <Grid item xs={4} md={6} className={classes.textCont}>
          <Title>Underlying Asset</Title>
          <DataPickerArea style={{ width: "85%" }}>
            <FormControl variant="standard" className={classes.dropdown}>
              <MyNativeSelect
                value={age}
                onChange={handleChange2}
                input={<BootstrapInput />}
              >
                <option value={10}>WBTC</option>
                <option value={20}>USDC</option>
                <option value={30}>ETH</option>
                <option value={20}>USDT</option>
              </MyNativeSelect>
            </FormControl>
          </DataPickerArea>
          </Grid>
          <Grid item xs={4} md={6} className={classes.textCont}>
          <Title>Order Amount</Title>
          <ThemeProvider theme={theme}>
            <AmountSlider />
            <FooterText>
            Need a large amount? Try{" "}
            <em
              style={{
                fontSize: 20,
                textDecoration: "underline",
                color: "#05e400",
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Smart Order Routing
            </em>
          </FooterText>
          </ThemeProvider>
          </Grid> 
          <Grid item xs={4} md={6} className={classes.textCont}>
          <Title>Expiration</Title>
          <ButtonContainer1>
            <CalendarImageArea>
              <CalendarImage src={calendarIcon} />
            </CalendarImageArea>
            <DataPickerArea>
              <DataPicker
                onChange={birthdayHandler}
                name="birthday"
                type="date"
                className="timepickerInput"
                placeholder="Date of Birth"
              />
              {/* <img src={arrowUnder} alt="arrow" width="20" height="12" style={{marginRight:20}} /> */}
            </DataPickerArea>
          </ButtonContainer1>
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
        </Grid>
    </ItemContainer>
  );
};

export default BannerContentDOA;
