import { Image, useColorScheme } from "react-native";
import LogoDark from "../assets/img/logo_dark.png";
import LogoLight from "../assets/img/logo_light.png";

import { Colors } from "../constants/Colors";

export default function ThemedLogo({ style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const logo = colorScheme === "light" ? LogoLight : LogoDark;
  return (
    // <View style={[{ backgroundColor: theme.background }, style]} {...props} />

    <Image source={logo} style={style} {...props} />
  );
}
