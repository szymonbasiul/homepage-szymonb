const paintCan = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  scienceBlue: "#0366D6",
  mineShaft: "#252525",
  iron: "#D1D5DA",
};

const common = {
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200,
  },
  boxShadow:
    "0px 16px 58px 0px rgba(9, 10, 51, 0.03), 0px -2px 50px 0px rgba(9, 10, 51, 0.02)",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: paintCan.scienceBlue,
    textPrimary: paintCan.mineShaft,
    site: {
      background: paintCan.whiteLilac,
      text: paintCan.slateGray,
    },
    mailButton: {
      border: paintCan.iron,
      shadow: paintCan.scienceBlue,
      text: paintCan.white,
    },
    tile: {
      border: paintCan.scienceBlue,
      borderHover: paintCan.scienceBlue,
      shadow: paintCan.scienceBlue,
    },
    boxBackground: paintCan.white,
    headerLine: paintCan.mercury,
    themeSwitch: {
      background: paintCan.mercury,
      icon: paintCan.white,
    },
  },
  //   light theme settings - default
};

export const themeDark = {
  ...common,
  //   dark theme settings
};
