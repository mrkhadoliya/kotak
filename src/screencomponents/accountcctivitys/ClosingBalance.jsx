import { StyleSheet, Text, TouchableOpacity, View, Pressable } from "react-native";
import React, { useState } from "react";
import GlobalTheme from "../../../GlobalTheme";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from "react-native-linear-gradient";

const ClosingBalance = ({ Balance, filterTransactions }) => {
    console.log(Balance,'osodosooos')
    const [openSelector, setOpenSelector] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    const [integerPart, decimalPart] = String(Balance).split('.');

    const handleFilter = (filterType) => {
        setOpenSelector(false);
        setSelectedValue(filterType);
        filterTransactions(filterType);
    };

    return (
        <View>
            <View style={styles.FlexDrow}>
                <View>
                    <Text style={styles.WithdraNameText}>Closing Balance (INR)</Text>
                    <Text style={[styles.WithdraPriceText]}>
                      {Balance ? `${integerPart}.` : 1000}
                      <Text style={[styles.WithdraPriceText,{fontSize:14, fontWeight:'900'}]}>{decimalPart}</Text>
                    </Text>
                </View>
                <View style={{ position: "relative" }}>
                    <LinearGradient colors={['#f7f7f7', '#c8c8c8']} style={styles.linearGradient}> 
                        <TouchableOpacity style={styles.TransButtons} onPress={() => setOpenSelector((prev) => !prev)}>
                            <Text style={styles.LastTranText}>{selectedValue == null ? "Last 10 Trans." : selectedValue}</Text>
                            <View style={styles.verticalLine} />
                            <AntDesign name="circledown" size={20} color={GlobalTheme.App_Theme.GreyTextColor} />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </View>
            {openSelector && (
                <View style={styles.openSelectorContainer}>
                    <Pressable onPress={() => handleFilter("Last 10 Trans.")} style={[styles.selectPressable, styles.FlexDrow]}>
                        <Text style={styles.selectText}>Last 10 Trans.</Text>
                        <FontAwesome name="dot-circle-o" size={30} color={GlobalTheme.App_Theme.GreyTextColor} />
                    </Pressable>
                    <View style={styles.DividerLine} />
                    <Pressable onPress={() => handleFilter("View last week")} style={[styles.selectPressable, styles.FlexDrow]}>
                        <Text style={styles.selectText}>View last week</Text>
                        <FontAwesome name="dot-circle-o" size={30} color={GlobalTheme.App_Theme.GreyTextColor} />
                    </Pressable>
                    <View style={styles.DividerLine} />
                    <Pressable onPress={() => handleFilter("View last month")} style={[styles.selectPressable, styles.FlexDrow]}>
                        <Text style={styles.selectText}>View last month</Text>
                        <FontAwesome name="dot-circle-o" size={30} color={GlobalTheme.App_Theme.GreyTextColor} />
                    </Pressable>
                    <View style={styles.DividerLine} />
                    <Pressable onPress={() => handleFilter("Custom Dates")} style={[styles.selectPressable, styles.FlexDrow]}>
                        <Text style={styles.selectText}>Custom Dates</Text>
                        <FontAwesome name="dot-circle-o" size={30} color={GlobalTheme.App_Theme.GreyTextColor} />
                    </Pressable>
                </View>
            )}
        </View>
    );
};

export default ClosingBalance;

const styles = StyleSheet.create({
    FlexDrow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    WithdraNameText: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 2,
        color: GlobalTheme.App_Theme.GreyTextColor,
    },
    WithdraPriceText: {
        fontSize: 19,
        color: GlobalTheme.App_Theme.blueDarkTEXT,
        fontWeight: "900",
    },
    DividerLine: {
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
    },
    linearGradient:{
        flex:1, 
        borderWidth:1,
        borderColor:GlobalTheme.App_Theme.GreyTextColor,
        borderRadius:5,
        width:170,
        alignItems:'center',
        justifyContent:'center'
    },
    LastTranText:{
        fontSize:15,
        fontWeight:'400',
        color:GlobalTheme.App_Theme.darkBlackColor
    },

    // Selector css
    TransButtons: {
        fontWeight: "400",
        letterSpacing: 0.2,
        paddingHorizontal: 12,
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "space-between", 
        borderRadius: 5,
        flexDirection:'row',

    },
    verticalLine:{
        height:45.2,
        width:1,
        backgroundColor:GlobalTheme.App_Theme.GreyTextColor,
        position:'absolute',
        right:45,
        top:-3
    },
    openSelectorContainer: {
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        borderWidth: 1,
        borderColor: GlobalTheme.App_Theme.GreyTextColor,
        padding: 5,
        borderRadius: 2,
        width: "100%",
        position: "absolute",
        top: 80,
        left: 0,
        right: 0,
        zIndex: 99,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5, 
    },
    selectPressable: {
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: "100%", 
    },
    selectText: {
        color: GlobalTheme.App_Theme.GreyTextColor,
        fontSize: 15,
        fontWeight: "500",
    },
});
