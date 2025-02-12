export const theme = {
  // example colors with dark mode
  breakpoints: {
    XXS: 320,
    XSM: 376,
    XMSM: 420,
    SM: 576,
    SMd: 642,
    Md: 768,
    XMd: 864,
    LG: 992,
    XL: 1200,
    XXL: 1400,
    XXXL: 1600,
  },
  colors: {
    white: "#fff",
    primary: "#EF9410", // primary button and link color
    secondary: "#015B8F", // secondary color - can be used for hover states
    third: "#252E4F",
    background: "#F9FAFC", // body background color
    background_secondary: "#FFFFFF", // secondary background color
    passive_background: "#343F50",
    text: "#0F2137",
    text_secondary: "#343D48",
    text_third: "#737a96",
    heading: "#02073E", // primary heading color
    heading_secondary: "#343D48", // heading color
    border_color: "#E9EDF5", // border color
    black: "#0F2137", // black color
    gray: "#F8FAFC",
    muted: "#7B8188", // muted color
    accent: "#609", // a contrast color for emphasizing UI
  },
  fonts: {
    body: `Lora -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    heading: "Lora",
    special: "Playfair Display",
    monospace: "Menlo, monospace",
  },
  boarder: {
    radius: 5,
  },

  fontSizes: [15, 15, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: "normal",
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: "30px",
    heading: "50px",
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
    heading: "-0.5px",
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ["1230px"],
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ["15px", null, null, "30px"],
    },
    header: {
      color: "#02073E",
      fontWeight: "normal",
      py: 3,
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      // justifyContent: 'space-between',
    },
    main: {},
    footer: {
      backgroundColor: "background_secondary",
    },
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
      letterSpacing: "heading",
      color: "heading",
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: "normal",
      lineHeight: ["40px", "80px"],
      letterSpacing: "-1px",
      textAlign: ["center", "left"],
    },
    title: {
      variant: "text.heading",
      fontWeight: "bold",
      fontSize: 18,
      lineHeight: "30px",
      color: "#0F2137",
    },
    heroSecondary: {
      color: "text_secondary",
      lineHeight: ["30px", "42px"],
      letterSpacing: "0.1em",
      textAlign: ["center", "left"],
    },
    lead: {
      fontSize: 40,
      fontFamily: "Lora",
      fontWeight: "500",
      lineHeight: "60px",
      letterSpacing: "-1.5px",
      color: "#0F2137",
    },
    muted: {
      lineHeight: "26px",
      color: "muted",
    },
    secondary: {
      fontWeight: 500,
      color: "#00A99D",
      lineHeight: "40px",
    },
  },
  links: {
    bold: {
      fontWeight: "bold",
    },
    nav: {
      display: ["none", null, "inline-block"],
      p: 2,
    },
    footer: {
      display: "block",
      px: 0,
      color: "inherit",
      textDecoration: "none",
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999,
    },
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, "none"],
    }, // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: "bold",
      color: "white",
      bg: "primary",
      cursor: "pointer",
      transition: "500ms",
      fontSize: 2,
      "&:hover": {
        bg: "secondary",
      },
    },
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      WebkitFontSmoothing: "antialiased",
      "@media(max-width: 479px)": {
        WebkitTextSizeAdjust: "100%",
      },
      a: {
        textDecoration: "none",
        color: "inherit",
      },
      button: {
        cursor: "pointer",
      },
    },
    a: {
      cursor: "pointer",
      textDecoration: "none",
    },
    button: {
      cursor: "pointer",
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "#D9E0E7",
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: "none",
    },
    srOnly: {
      border: "0 !important",
      clip: "rect(1px, 1px, 1px, 1px) !important",
      clipPath: "inset(50%) !important",
      height: "1px !important",
      margin: "-1px !important",
      overflow: "hidden !important",
      padding: "0 !important",
      width: "1px !important",
    },
  },
} as const;
