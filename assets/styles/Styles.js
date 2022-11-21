import {StyleSheet} from "react-native";
import { colors } from "../data/data";

const AllStyle = StyleSheet.create({

    parentContainerStyle: {
        backgroundColor: "white",
        paddingVertical: 40,

    },

    h1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Roboto_400Regular"
    },

    p: {
        fontSize: 17,
        color: "rgba(0, 0, 0, .6)",
        marginTop: 20,
        textAlign: "center"
        
    },

    divider: {
        flex: 2,
        height: 1.1,
        backgroundColor: "rgba(0, 0, 0, .3)"
    },

    dividerText: {
        color: "rgba(0, 0, 0, .4)",
        fontSize: 20,
        flex: 0.5,
        textAlign: "center"


    },

    pDefault: {
        fontSize: 17,

    },

    container: {
        width: "100%",
        marginVertical: 20
    },

    dividerContainer: {
        width: "100%",
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 0,
        marginTop: 30,
        alignItems: "center"
    },

    label: {
        fontSize: 19

    },

    textInputStyle: {
        width: "100%",
        fontSize: 18
    },

    loginInput: {
        width: "100%",
        marginTop: 22,
        height: 50,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, .05)",
        flexDirection: "row",
        alignItems: "center"
    },

    buttonStyle: {
        width: "100%",
        height: 50,
        alignItems: "center",
        backgroundColor: colors.primary,
        opacity: 1,
        color: "white",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 40

    },

    buttonText: {
        color: "white",
        fontSize: 18
    },

    buttonDisabledStyle: {

        width: "100%",
        height: 50,
        alignItems: "center",
        backgroundColor: colors.primary,
        opacity: 0.6,
        color: "white",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 40

    },

    buttonTextTwo: {
        color: "black",
        fontSize: 17
    },

    otherButton: {
        backgroundColor: "rgba(0, 0, 0, .05)",
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginTop: 40,
        flexDirection: "row"

    },

    buttonIcons: {
        width: 16,
        marginRight: 20
    },

    linkStyle: {
        color: colors.primary

    }

})

export default AllStyle;