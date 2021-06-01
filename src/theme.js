import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  shadows: {
    sm: "0px 2px 2px #F0F0F0",
  },
  radii: {
    md: "0.25rem",
  },
  colors: {
    blue: {
      500: "#2196F3",
      600: "#0a7bd5",
    },
    gray: {
      200: "#CCCCCC",
      500: "#CCCCCC",
      700: "#707070",
    },
  },
  components: {
    FormLabel: {
      baseStyle: {
        color: "gray.700",
      },
    },
    Input: {
      baseStyle: {
        // not working
        color: "red",
        fontWeight: "bold",
        fontSize: "5px",
      },
      defaultProps: {
        size: "lg",
      },
    },
    Link: {
      baseStyle: {
        color: "blue.500",
        fontWeight: "bold",
        textDecoration: "underline",
      },
    },
    Button: {
      baseStyle: {
        fontWeight: "bold",
        color: "white",
      },
      variants: {
        "no-shadow": {
          boxShadow: "none",
        },
        // override existing variants
        solid: {
          boxShadow: "0px 4px 12px #C6ECFC",
          // fontSize: "18px",
        },
      },
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
});
export default theme;
