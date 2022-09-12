import { StyleSheet } from "react-native";

export const colors = StyleSheet.create({
    background: '#b2eefe',
    white: '#fff',
    black: '#000',
    light: '#fff',
    dark: '#333',
    secondary: '#ccc',
    borderColor: '#cecece'
})

const globalStyles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textDark: {
        color: colors.dark,
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default globalStyles