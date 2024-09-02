import "@rneui/themed";

type ThemeColors =
  | "#000000"
  | "#5E5F65"
  | "#ECECEC"
  | "#C4C5CC"
  | "#8C8E94"
  | "#FFFFFF"
  | "#5D6DBE"
  | "#607AFF"
  | "#DCE2FF"
  | "#EFF1F9"
  | "#2A3779"
  | "#FF0000"
  | "#FF7253"
  | "#F24679";

type ThemeFont =
  | "Pretendard_100"
  | "Pretendard_200"
  | "Pretendard_300"
  | "Pretendard_400"
  | "Pretendard_500"
  | "Pretendard_600"
  | "Pretendard_700"
  | "Pretendard_800"
  | "Pretendard_900";

type ColorMap = Record<ThemeColors, ThemeColors>;

declare module "@rneui/themed" {
  export interface Colors extends ColorMap {
    // //black
    // "#000000": "#000000";
    // //gray
    // "#5E5F65": "#5E5F65";
    // "#ECECEC": "#ECECEC";
    // "#C4C5CC": "#C4C5CC";
    // "#8C8E94": "#8C8E94";
    // //white
    // "#FFFFFF": "#FFFFFF";
    // //blue
    // "#5D6DBE": "#5D6DBE";
    // "#607AFF": "#607AFF";
    // "#DCE2FF": "#DCE2FF";
    // "#EFF1F9": "#EFF1F9";
    // "#2A3779": "#2A3779";
    // //red
    // "#FF0000": "#FF0000";
    // "#FF7253": "#FF7253";
    // "#F24679": "#F24679";
  }

  export interface TextProps {
    font: ThemeFont;
    color: ThemeColors;
  }

  export interface ButtonProps {
    font: ThemeFont;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
    Button: Partial<ButtonProps>;
  }
}
