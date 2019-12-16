import extract from './extract';

export default function createCustomTheme(customTheme) {
  return (currentTheme, themeProps) => {
    const { buttonStyles, spinnerStyles } = currentTheme(themeProps);
    return {
      buttonStyles: {
        ...buttonStyles,
        ...extract(customTheme, themeProps),
      },
      spinnerStyles,
    };
  };
}
