import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, Pressable, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import user from "../assets/logo/kotak-logo.webp";
import Home from "../screencomponents/homesScreens/Home";
import CreditCard from "../screencomponents/homesScreens/CreditCard";
import Services from "../screencomponents/homesScreens/Services";
import Investment from "../screencomponents/homesScreens/Investment";
import ApplyAccount from "../screencomponents/homesScreens/ApplyAccount";
import GlobalTheme from "../../GlobalTheme"; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
    const { navigation } = props;
    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "star-sharp" : "star-outline";
                        } else if (route.name === "Apply Account") {
                            iconName = focused ? "document-text" : "document-text-outline";
                        } else if (route.name === "CreditCard") {
                            iconName = focused ? "card" : "card-outline";
                        } else if (route.name === "Services") {
                            iconName = focused ? "folder-open" : "folder-open-outline";
                        } else if (route.name === "Investment") {
                            iconName = focused ? "bar-chart" : "bar-chart-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                    tabBarActiveTintColor: "#ff0000",
                    tabBarInactiveTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    headerStyle: { backgroundColor: "#ff0000",},
                    headerTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                    tabBarStyle: {
                        activeTinatColor: "#000",
                        inactiveTintColor: "#3B3935",
                        showLabel: true,
                        backgroundColor: "#191934",
                        height: 70,
                        paddingBottom: 15,
                        borderTopColor: GlobalTheme.App_Theme.PrimaryWhite,
                    },

                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 14, fontWeight: "400" },
                })}
            >
                <Tab.Screen
                    name="Home" 
                    options={({ navigation }) => ({
                        title: "My Kotak",
                            headerStyle: {
                                backgroundColor: "#ff0000"
                            },
                            headerShown: true,
                            headerTitle: false,
                            backTitle: null,
                        headerLeft: () => (
                            <View style={{ left: 10,}}>
                                <View style={{flexDirection: "row", gap: 10, alignItems: "center" }}>
                                    <Pressable style={styles.userView} onPress={() =>navigation.toggleDrawer()}>
                                        <FontAwesome6 name="bars-staggered" size={25} color="#fff" />
                                    </Pressable>
                                    <Pressable style={styles.userView}>
                                        <Image source={user} style={styles.userImage} resizeMode="contain" />
                                    </Pressable>
                                </View> 
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ position: "relative", right: 10 }}>
                                <View style={{flexDirection: "row", gap: 15, alignItems: "center" }}>
                                    <Pressable style={styles.menubtn} onPress={() => navigation.navigate("")}>
                                        <MaterialCommunityIcons name="barcode-scan" size={22} color="#fff" />
                                    </Pressable>
                                    <Pressable style={styles.menubtn}>
                                        <AntDesign name="message1" size={22} color="#fff" />
                                    </Pressable>
                                    <Pressable style={styles.menubtn}>
                                        <Ionicons name="search" size={22} color="#fff" />
                                    </Pressable>
                                </View>
                            </View>
                        ),
                        headerTitleStyle: {
                            display: "none",
                        },
                    })}
                >
                    {(props) => <Home {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Apply Account"
                    options={({ navigation }) => ({
                        title: "Apply Now",
                        // tabBarBadge: 1,
                        headerShown: false,
                        headerRight: () => (
                            <View style={{right: 15 }}>
                                <Pressable style={styles.menubtn} onPress={() => navigation.navigate("notification")}>
                                    <Ionicons name="notifications" size={25} color="#3B3935" />
                                </Pressable>
                            </View>
                        ),
                        tabBarIcon: ({ color, size }) => <AntDesign name="customerservice" color={color} size={size} />,
                    })}
                >
                    {(props) => <ApplyAccount {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="CreditCard"
                    options={{
                        title: "Credit Card",
                        headerShown: false,
                        headerRight: () => (
                            <TouchableOpacity style={styles.cartIcons} onPress={() => navigation.navigate("notification")}>
                                <Ionicons name="notifications" style={{ fontSize: 25 }} color="#000" />
                            </TouchableOpacity>
                        ),
                    }}
                >
                    {(props) => <CreditCard {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Services"
                    options={{
                        title: "Services Request",
                        headerShown: false,
                        headerRight: () => (
                            <TouchableOpacity style={styles.cartIcons} onPress={() => navigation.navigate("notification")}>
                                <Ionicons name="notifications" style={{ fontSize: 25 }} color="#000" />
                            </TouchableOpacity>
                        ),
                        tabBarIcon: ({ color, size }) => <MaterialIcons name="local-offer" color={color} size={size} />,
                    }}
                >
                    {(props) => <Services {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Investment"
                    options={({ navigation }) => ({
                        title: "Investment", 
                        headerShown: false,
                        headerRight: () => (
                            <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("save media")}>
                                <Ionicons name="bookmark-outline" style={{ fontSize: 25 }} color="#000" />
                            </Pressable>
                        ),
                        tabBarIcon: ({ color, size }) => <MaterialIcons name="video-collection" color={color} size={size} />,
                    })}
                >
                    {(props) => <Investment {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    userImage: {
        width: 120,
        height: 50,
        resizeMode: "contain",  
    },
    cartIcons: {
        right: 15,
        // width: 35,
        // height: 35,
        // borderRadius: 8,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        // elevation: 11,
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "#fff",
    },
});
