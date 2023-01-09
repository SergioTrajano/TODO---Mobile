import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },

    imageContainer: {
        backgroundColor: "#0D0D0D",
        height: "21.3%",
        justifyContent: "center",
        alignItems: "center",
    },

    image: {
        width: 110,
        height: 32,
    },

    list: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        position: "relative",
        alignItems: "center",
    },

    form: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: -27,
    },

    input: {
        borderRadius: 6,
        backgroundColor: "#262626",
        width: 271,
        height: 54,
        fontSize: 16,
        padding: 16,
        marginRight: 6,
        color: "#FFFFFF",
    },

    formButton: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },

    indicatorContainer: {
        width: 327,
        height: 19,
        marginTop: 59,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    indicator: {
        flexDirection: "row",
        alignItems: "center",

        height: 19,
    },
    indicatorTextCreated: {
        color: "#4EA8DE",
        fontSize: 14,
        textAlign: "center",
    },
    indicatorTextDone: {
        color: "#8284FA",
        fontSize: 14,
    },
    indicatorNumberContainer: {
        width: 25,
        height: 19,
        backgroundColor: "#333333",
        borderRadius: 100,
        marginLeft: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    indicatorNumber: {
        color: "#FFFFFF",
        fontSize: 12,
        textAlign: "center",
    },

    emptyListElement: {
        borderTopWidth: 1,
        borderTopColor: "#333333",
        width: 327,
        height: 208,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyListTextBold: {
        fontSize: 14,
        color: "#808080",
        fontWeight: "bold",
        lineHeight: 19.6,
        marginTop: 16,
    },
    emptyListText: {
        fontSize: 14,
        color: "#808080",
        lineHeight: 19.6,
    },
});
