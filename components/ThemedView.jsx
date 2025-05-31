import { View, useColorScheme } from "react-native";

import { Colors } from "../constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedView({ style, safe = "false", ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  if (!safe)
    return (
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    );
  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
          paddingTop: inset.top,
          paddingBottom: inset.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
