import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text>About screen</Text>
            <Link href="/" style={styles.btnLink}>Go to Home screen</Link>
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
    btnLink: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#000",
        color: "#fff",
    }
})