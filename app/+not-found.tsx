import { Stack, Link } from "expo-router";
import { View, StyleSheet, Text } from "react-native";


export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
            <View style={styles.container}>
                <Link href="/" style={styles.link}>
                    <Text>Go to home!</Text>
                </Link>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    link: {
        padding: 10,
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: 5,
    }
})