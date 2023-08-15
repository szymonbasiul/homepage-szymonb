const paintCan = {
  white: "#FFFFFF",
  porcelain: "#EFF2F3",
  whiteLilac: "#FBFBFE",
  doveGray: "#6D6C6C",
  slateGray: "#6E7E91",
  mercury: "#E5E5E5",
  tropicalBlue: "#C3DDF9",
  anakiwa: "#9DE5FF",
  shipCove: "#788BBA",
  scienceBlue: "#0366D6",
  dodgerBlue: "#1E90FF",
  blumine: "#18587A",
  tundora: "#4A4244",
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
      border: paintCan.white,
      shadow: paintCan.iron,
      text: paintCan.anakiwa,
    },
    tile: {
      border: paintCan.porcelain,
      borderHover: paintCan.tropicalBlue,
      shadow: paintCan.scienceBlue,
    },
    boxBackground: paintCan.white,
    headerLine: paintCan.mercury,
    themeSwitch: {
      background: paintCan.mercury,
      icon: paintCan.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: paintCan.dodgerBlue,
    textPrimary: paintCan.white,
    site: {
      background: paintCan.mineShaft,
      text: paintCan.white,
    },
    mailButton: {
      border: paintCan.white,
      shadow: paintCan.iron,
      text: paintCan.white,
    },
    tile: {
      border: paintCan.tundora,
      borderHover: paintCan.blumine,
      shadow: paintCan.white,
    },
    boxBackground: paintCan.mineShaft,
    headerLine: paintCan.tundora,
    themeSwitch: {
      background: paintCan.doveGray,
      icon: paintCan.mineShaft,
    },
  },
};
