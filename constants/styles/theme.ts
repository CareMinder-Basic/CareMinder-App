import { createTheme } from "@rneui/themed";
import { color } from "./color";

export const theme = createTheme({
  components: {
    Button: (props) => ({
      titleStyle: {
        fontFamily: props.font,
      },
    }),
    Text: (props) => ({
      style: {
        color: props.color,
        fontFamily: props.font,
      },
    }),
  },
  darkColors: color,
  lightColors: color,
});
