import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cecece',
    },
    logo: {
        width: 45,
        height: 45,
        marginRight: 10,
    },
    logoTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    navWrapper: {
        flexDirection: 'column',
        marginTop: 10,
        flex: 1
    },
    pageItems: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 8,
    },
    pageIcons: {
        fontSize: 22,
        color: '#444',
        marginRight: 10
    },
    pageTitle: {
        fontSize: 20,
        color: '#444'
    },
    oath: {
        bottom: 0,
        alignItems: 'center',
    }
})

export default styles