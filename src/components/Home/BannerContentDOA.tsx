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
    borderRadius: 4,
    backgroundColor: "white",
    height: 10,
  },
  dropdown: {
    width: "100%",
    color: "white",
    height: "100%",
    backgroundColor: "#3e4251",
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
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    padding-left:2%;
    padding-bottom:2%;
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
const Title1 = styledCom.p`
    font-size: 23px;
    color: white;
    background-color: rgb(${colors.gradLight});
    text-align:end;
    padding:0.2em 0.6em;
    margin-left:20px;
    border-radius:5px;
`;
const FooterText = styledCom.p`
    font-size: 17px;
    color: white;
    text-align:center;
    margin-top:15px;
    margin-bottom:-15px;
`;
const TitleStrike = styledCom.p`
    font-size: 23px;
    font-weight:bold;
    color: white;
`;
const Title5 = styledCom.p`
    font-size: 30px;
    text-align:center;
    font-weight:bold;
    color: white;
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
    width:300px;
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
    width:250px;
    border-width:0px;
    font-size:20px !important;
    color: white;
    border-color: rgb(63,66,81);
`;

const PriceArea = styledCom.div`
    padding-top:1em;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items:center;
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
  const [amount, setAmount] = useState(50);
  const [age, setAge] = useState("");
  const [alignment, setAlignment] = React.useState("web");

  const birthdayHandler = () => {};
  const [open, setOpen] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange2 = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: "white !important",
            backgroundColor: "#3e4251 !important",
            borderRadius: "3px !important",
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          colorPrimary: "white",
          barColorPrimary: "#00dcb9",
        },
      },
    },
  });

  return (
    <ItemContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.textCont}>
          <Title>Option Type</Title>
          <CallPutToggleButton />
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
        <Grid item xs={12} md={6} className={classes.textCont}>
        <Title>Strike Price</Title>
              <TextField
                value={values.numberformat}
                onChange={handleChange}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom as any,
                }}
                variant="standard"
              />
            
          <Title>Order Amount</Title>
          <ThemeProvider theme={theme}>
            <AmountSlider />
          </ThemeProvider>
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
