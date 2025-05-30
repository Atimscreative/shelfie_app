import { View } from "react-native";

export default function Spacer({ width = "100%", height = "40", ...props }) {
  return <View style={{ width, height }} {...props} />;
}
