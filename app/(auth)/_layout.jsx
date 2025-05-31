import { StyleSheet, useColorScheme } from "react-native";
import { Stack } from "expo-router";
// import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  // const colorScheme = useColorScheme();
  // const theme = Colors[colorScheme] ?? Colors.light;

  // console.log(colorScheme);

  return (
    <GuestOnly>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      ></Stack>
    </GuestOnly>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
