// import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height="20" />
      <ThemedText title={true} style={[styles.title]}>
        The Number 1
      </ThemedText>
      <Spacer height="10" />
      <ThemedText>Reading List App </ThemedText>

      <Link style={styles.link} href="/login">
        <ThemedText> Login</ThemedText>
      </Link>
      <Link style={[styles.link]} href="/register">
        <ThemedText> Register</ThemedText>
      </Link>
      <Link style={[styles.link]} href="/profile">
        <ThemedText> My Profile</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 25,
    boxShadow: "4px 4px rgba(0,0,0,0.4)",
  },

  link: {
    borderBottomWidth: 1,
    borderStyle: "solid",
    marginVertical: 5,
  },
});
