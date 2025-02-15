import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello World!</Text>
      <Link href="/about" style={styles.btnLink}>Go to About screen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c8c8c8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  btnLink: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
  }
})
