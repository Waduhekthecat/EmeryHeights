// Styling shortcuts and hotkeys

export const colors: any = {
  // brand palette: 
  primary: 'rgb(67, 159, 174)',
  secondary: '#504798',
  effect: '#5E6CFA',
  shading: '#3E4251',
  bgGradient: {
    'rgb(68, 140, 175)':'0%',
    'rgb(0, 153, 215)':'40%',
    'rgb(240, 240, 200)':'80%'
  },
  cardBg: "linear-gradient(to right, rgba(98, 99, 117, 0.3), rgba(174, 175, 184, 0.3))",
  // other colors:
  main: "rgb(54, 60, 79)",
  gradDark: "rgb(31,36,54)",
  gradLight: "rgb(61, 66, 81)",
  bottomDark: "rgb(33, 36, 54, 0.75)",
  bottomLight: "rgb(65, 74, 122, 0.75)",
  border: "rgb(196, 196, 196, 0.3)",
  fontColor: "rgb(255,255,255)",
  fontColor1: "rgb(42,42,42)",
  fontColor2: "rgb(176,179,194)",
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  dark: 'rgb(94, 97, 114)',
  grey: 'rgb(87, 104, 128)',
  darkGrey: 'rgb(113, 119, 138)',
  lightGrey: 'rgb(212, 212, 212)',
  blue: 'rgb(93, 109, 248)',
  lightBlue: 'rgb(64, 153, 255)',
  yellow: 'rgb(250, 188, 45)',
  orange: 'rgb(246, 133, 27)',
  green: 'rgb(84, 209, 146)',
  pink: 'rgb(255, 51, 102)',
  red: 'rgb(214, 75, 71)',
  purple: 'rgb(110, 107, 233)',
  selected: 'rgb(67, 159, 174)',
};

export const fonts = {
  size: {
    tiny: '10px',
    small: '14px',
    medium: '16px',
    large: '18px',
    h1: '60px',
    h2: '50px',
    h3: '40px',
    h4: '32px',
    h5: '24px',
    h6: '20px'
  },
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  family: {
    OpenSans: '"Open Sans", sans-serif'
  }
};

export const transitions = {
  short: 'all 0.1s ease-in-out',
  base: 'all 0.2s ease-in-out',
  long: 'all 0.3s ease-in-out',
  button: 'all 0.15s ease-in-out'
};

export const shadows = {
  soft:
    '0 4px 6px 0 rgba(50, 50, 93, 0.11), 0 1px 3px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)',
  medium:
    '0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 0 1px 0 rgba(50, 50, 93, 0.02), 0 5px 10px 0 rgba(59, 59, 92, 0.08)',
  big:
    '0 15px 35px 0 rgba(50, 50, 93, 0.06), 0 5px 15px 0 rgba(50, 50, 93, 0.15)',
  hover:
    '0 7px 14px 0 rgba(50, 50, 93, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.08), inset 0 0 1px 0 rgba(0, 0, 0, 0.06)'
}

export const responsive = {
  xs: {
    min: 'min-width: 467px',
    max: 'max-width: 468px'
  },
  sm: {
    min: 'min-width: 639px',
    max: 'max-width: 640px'
  },
  md: {
    min: 'min-width: 959px',
    max: 'max-width: 960px'
  },
  lg: {
    min: 'min-width: 1023px',
    max: 'max-width: 1024px'
  },
  xl: {
    min: 'min-width: 1399px',
    max: 'max-width: 1400px'
  }
};

export const globalStyle = `
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,600,700,800');

  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-style: normal;
    font-stretch: normal;
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.size.medium};
    background-color: rgb(${colors.white});
    color: rgb(${colors.dark});
    overflow-y:auto;
    text-rendering: optimizeLegibility;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  	-webkit-text-size-adjust: 100%;
    -webkit-overflow-scrolling: touch;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;  
  }

  button {
    border-style: none;
    line-height: 1em;
    background-image: none;
    outline: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
  }

  [tabindex] {
    outline: none;
    width: 100%;
    height: 100%;
  }

  a, p, h1, h2, h3, h4, h5, h6 {
  	text-decoration: none;
  	margin: 0;
    padding: 0;
    margin: 0.7em 0;
  }

  h1 {
    font-size: ${fonts.size.h1}
  }
  h2 {
    font-size: ${fonts.size.h2}
  }
  h3 {
    font-size: ${fonts.size.h3}
  }
  h4 {
    font-size: ${fonts.size.h4}
  }
  h5 {
    font-size: ${fonts.size.h5}
  }
  h6 {
    font-size: ${fonts.size.h6}
  }
  background1 {

    background-color: rgb(${colors.white})
  }

  background2{

    background-color: rgb(${colors.selected2})
  }  
  

  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;  
    text-decoration: none;
    color: inherit;
    outline: none;
  }

  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }

  ul, li {
  	list-style: none;
  	margin: 0;
  	padding: 0;
  }

  * {
    box-sizing: border-box !important;
  }


  input {
    -webkit-appearance: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }

  input[type="color"],
  input[type="date"],
  input[type="datetime"],
  input[type="datetime-local"],
  input[type="email"],
  input[type="month"],
  input[type="number"],
  input[type="password"],
  input[type="search"],
  input[type="tel"],
  input[type="text"],
  input[type="time"],
  input[type="url"],
  input[type="week"],
  select:focus,
  textarea {
    font-size: 16px;
  }
`
