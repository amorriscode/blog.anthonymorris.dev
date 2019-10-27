import novelaTheme from '@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui';

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors.modes.dark,
    grey: "#A6F673",
    accent: "#A6F673",
    background: "rgb(31, 24, 55)",
    gradient:
      "linear-gradient(180deg, rgb(31, 24, 55) 0%, rgb(101, 40, 90) 100%)",
    progress: "#61ff00",
    card: "#1D2128",
    error: "#E200B9",
    success: "#61FF00",
    horizontalRule: "rgba(166, 246, 115, 0.8)",
    modes: {
      dark: {
        ...novelaTheme.colors.modes.dark,
        grey: "#A6F673",
        accent: "#A6F673",
        background: "rgb(31, 24, 55)",
        gradient:
          "linear-gradient(180deg, rgb(31, 24, 55) 0%, rgb(101, 40, 90) 100%)",
        progress: "#61ff00",
        card: "#1D2128",
        error: "#E200B9",
        success: "#61FF00",
        horizontalRule: "rgba(166, 246, 115, 0.8)",
      },
    },
  }
};
