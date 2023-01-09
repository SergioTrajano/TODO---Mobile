import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        minHeight: 64,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 8,
        backgroundColor: "#262626",
        padding: 12,
        marginBottom: 8,
    },
    text: {
        color: "#F2F2F2",
        fontSize: 14,
        lineHeight: 19.6,
        width: 235,
        marginLeft: 8,
        marginRight: 8,
    },
    textOutlined: {
        color: "#808080",
        fontSize: 14,
        lineHeight: 19.6,
        width: 235,
        marginLeft: 8,
        marginRight: 8,
        textDecorationLine: "line-through",
    },
});
