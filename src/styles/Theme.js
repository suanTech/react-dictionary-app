export const colors = {
  black: "#050505",
  dark: "#1F1F1F",
  darkGrey: "#2D2D2D",
  medGrey: "#3A3A3A",
  grey: "#838383",
  lightGrey: "#E9E9E9",
  lighterGrey: '#F4F4F4',
  primary: "#A733FF",
  accent: "#FF5252",
};

export const lightTheme = {
  bg: {hex:'#ffffff', rgb: '255, 255, 255'} || '#ffffff',
  text: colors.darkGrey,
  inputBg: colors.lightGrey,
  toggleBg: colors.grey,
  icon: colors.grey,
};

export const darkTheme = {
  bg: {hex:"#050505", rgb: '5,5,5'} || '#050505',
  text: "#ffffff",
  inputBg: colors.grey,
  toggleBg: colors.primary,
  icon: colors.primary,
};
