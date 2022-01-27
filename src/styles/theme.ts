// This is needed in order to use themes on global styles
export type ThemeType = typeof globalTheme;

const globalTheme = {
  dark: '#333333',
  light: '#f3f4f6',
  lightGray: '#a5aaad',

  // Red - Exploring
  lightRed_1: '#fdcfd0',
  lightRed_2: '#ff3e47',
  darkRed_1: '#e01031',
  darkRed_2: '#af041f',

  // Orange - Exploring to Inspiring
  lightOrange_1: '#fddac1',
  lightOrange_2: '#fd9023',
  darkOrange_1: '#ea780c',
  darkOrange_2: '#bf4d00',

  // Yellow - Inspiring
  lightYellow_1: '#fff0a0',
  lightYellow_2: '#ffd812',
  darkYellow_1: '#ecc000',
  darkYellow_2: '#daa700',

  // Green - Inspiring to Unlimited
  lightGreen_1: '#a9edcb',
  lightGreen_2: '#19be5a',
  darkGreen_1: '#008851',
  darkGreen_2: '#1d583f',

  // Blue - Unlimited
  lightBlue_1: '#a6ddf7',
  lightBlue_2: '#12b0e6',
  darkBlue_1: '#1a649f',
  darkBlue_2: '#174162',

  // Purple - Unlimited to Job Market
  lightPurple_1: '#d8c1ff',
  lightPurple_2: '#9d65db',
  darkPurple_1: '#66089e',
  darkPurple_2: '#4a0673',
}

export const lightTheme = {
  ...globalTheme
}

export const darkTheme = {
  ...globalTheme
}