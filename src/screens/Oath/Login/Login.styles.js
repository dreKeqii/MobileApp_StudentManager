import { StyleSheet } from "react-native";
import { colors } from "../../../../Global.styles";

const styles = StyleSheet.create({
    login: {
        flex: 1,

    },
    header: {
        paddingVertical: 10,
        marginHorizontal: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.secondary
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputForm: {
        flex: 1,
        minHeight: 350,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.white
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
    }
})

export default styles