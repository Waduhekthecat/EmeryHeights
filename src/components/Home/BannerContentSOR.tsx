import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import styledCom from 'styled-components'
import calendarIcon from '../../assets/images/calendarIcon.png'
import { makeStyles, ThemeProvider, createTheme, styled, withStyles } from '@material-ui/core/styles';
import LinearProgress from "@material-ui/core/LinearProgress";
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { useHistory } from 'react-router-dom'


import { colors } from '../../styles'

// const data = [
//     {
//         id: 100,
//         title: "Centaur",
//         image: "https://d30y9cdsu7xlg0.cloudfront.net/png/120146-200.png"
//     },
//     {
//         id: 70,
//         title: "BTC",
//         image: "https://d30y9cdsu7xlg0.cloudfront.net/png/120146-200.png"
//     },
//     {
//         id: 110,
//         title: "Ethereum",
//         image: "https://d30y9cdsu7xlg0.cloudfront.net/png/120146-200.png"
//     },
// ];
const MyNativeSelect = withStyles({
    icon: {
        color: "white !important",
        width: "2em !important",
        height: "2em !important",
        marginTop:-10
    }
})(NativeSelect);
const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#3e4251',
        height: 60,
        //   border: '1px solid #ced4da',
        fontSize: 25,
        color: 'black',
        paddingLeft: '10px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
        },
    },
}));

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 300,
    bgcolor: '#1f2436',
    border: '0px solid #000',
    borderRadius: 5,
    boxShadow: 24,
};

// Material ui style
const useStyles = makeStyles((theme) => ({
    root: {
        width: '70%',
        height: '70%',
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '15%',
        fontSize: '500rem',
        borderRadius: '20px',
        backgroundColor: '#1f2436',
    },
    paper: {
        background: "red",
        color: "white"
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingRight: '5% !important',
    },
    textCont1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: '5% !important',
        paddingRight: '5% !important',
        backgroundColor: 'white',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    progress: {
        width: '100%',
        borderRadius: 4,
        backgroundColor: '#373b44',
        height: 10
    },
    dropdown: {
        width: '100%',
        color: 'white',
        height: 60,
        backgroundColor: '#3e4251',
        borderRadius: 10
    },
    HeaderTilte: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: 70,
        display: 'flex',
        color: 'white',
        backgroundColor: '#5d6171',
        justifyContent: 'center',
        alignItems: 'center'
    },
    HeaderTitle1: {
        height: 70,
        display: 'flex',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#6fc3db',
        },
    }
});

// styled-components 
const BannerImg = styledCom.img`
    width: 100%;
    height: 100%;
    max-width: 450px;
    max-height: 450px;
    min-width: 200px;
    min-height: 200px;
`
const progressContainer = styledCom.input`
    width: 100%;
    background-color:red;
`
const Title = styledCom.p`
    font-size: 25px;
    color: white;
    margin-top:50px;
`
const Title1 = styledCom.p`
    font-size: 23px;
    color: white;
    background-color: rgb(${colors.gradLight});
    text-align:end;
    padding:0.2em 0.6em;
    margin-left:20px;
    border-radius:5px;
`
const Title2 = styledCom.p`
    font-size: 17px;
    color: rgb(${colors.gradLight});
    text-align:center;
    margin-top:15px;
    margin-bottom:-15px;
`
const Title4 = styledCom.p`
    font-size: 23px;
    font-weight:bold;
    color: rgb(${colors.gradDark});
`
const Title5 = styledCom.p`
    font-size: 30px;
    text-align:center;
    font-weight:bold;
    color: rgb(${colors.gradDark});
`
const Description = styledCom.p`
    font-size: 50px;
    font-style: bold;
    font-weight: 800;
    color: #05e400;
    line-height: 1.5;
`
const ButtonContainer = styledCom.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 550px) {
        width: 100%;
    }
`
const ButtonContainer2 = styledCom.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    @media (max-width: 550px) {
        width: 300px;
    }
`
const ButtonContainer1 = styledCom.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom:30px;
    @media (max-width: 550px) {
        width: 100%;
        margin-left:0;
    }
`
const OutlineButton = styledCom.button`
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-size:25px;
    font-weight:bold;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.gradLight});
    background-color: white;
    margin: 0.5em 0;
    transition: all 0.2s ease-out;
    @media (max-width: 550px) {
        width: 90%;
        margin:0 10px;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background: rgb(${colors.fontColor});
    }
    :active {
        background: rgb(93,109,248);
    }
    :focus {
        background: rgb(93,109,248);
    }
    :target {
        background: rgb(93,109,248);
    }
`
const ModalCloseButton = styledCom.button`
    position:absolute;
    top:15px;
    right:15px;
    width:25px;
    height:25px;
    border-radius: 15px;
    font-size:15px;
    font-weight:bold;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.gradLight});
    background-color: white;
    margin: 0.5em 0;
    transition: all 0.2s ease-out;
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background: rgb(${colors.fontColor});
    }
`
const NoBorderButton = styledCom(OutlineButton)`
    border: none;
`
const CalendarImage = styledCom.img`
    width: 35px;
    height: 35px;
    background-size: contain;
`
const CalendarImageArea = styledCom.div`
    width:60px;
    height:60px;
    border-radius:10px;
    background-color: rgb(62,66,81);
    display:flex;
    justify-content:center;
    align-items:center;
`
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
`
const DataPicker = styledCom.input`
    background-color: rgb(63,66,81);
    padding-left:0.5em;
    width:250px;
    border-width:0px;
    font-size:20px !important;
    color: white;
    border-color: rgb(63,66,81);
`
const CoinDropPicker = styledCom.input`
    background-color: rgb(63,66,81);
    padding-left:0.5em;
    width:250px;
    border-width:0px;
    font-size:20px !important;
    color: white;
    border-color: rgb(63,66,81);
`
const PriceArea = styledCom.div`
    padding-top:1em;
    display:flex;
    flex-direction:row;
    align-items:center;
`
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
`

interface Props {
}

const BannerContentSOR: React.FC<Props> = () => {
    const history = useHistory()
    const classes = useStyles();
    const [percentage, setPercentage] = useState(40);
    const [amount, setAmount] = useState(50);
    const [age, setAge] = useState('');
    const birthdayHandler = () => {

    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

    const handleChangeEvent = (e: any) => {
        setPercentage(e.target.value)
    }

    return (
        <Grid container spacing={2} className={classes.root}>
            <Description>Smart Order Router Coming Soon!</Description>
        </Grid>
    )
}

export default BannerContentSOR
