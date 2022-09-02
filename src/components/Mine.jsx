import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    const { mined, opened, nearMines } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (styleField.length === 1) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = "#2A28D7"
        if (nearMines == 2) color = "#2B520F"
        if (nearMines >2 && nearMines < 6) color = "#F9060A"
        if (nearMines >= 6) color = "#F221A9"
    }

    return (
        <View style={styles.container}>
            <View style={styles.coreMine} />
            <View style={styles.line} />
            <View style={[ styles.line, { transform: [{ rotate: "45deg" }] } ]} />
            <View style={[ styles.line, { transform: [{ rotate: "90deg" }] } ]} />
            <View style={[ styles.line, { transform: [{ rotate: "135deg" }] } ]} />
            {!mined && opened && nearMines > 0 ? <Text style={ [styles.label, { color: color }] }> {nearMines} </Text> : false}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center"
    },
    line: {
        position: "absolute",
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: "#000"
    }
})