const colors = {
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
};

export const themeLight = {
  ...common,
  //   light theme settings - default
};

export const themeDark = {
  ...common,
  //   dark theme settings
};
