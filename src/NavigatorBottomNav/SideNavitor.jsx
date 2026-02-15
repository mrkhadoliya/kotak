import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import user from "../assets/logo/kotak-logo.webp";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import GlobalTheme from "../../GlobalTheme";
import userImage from "../assets/users-b.png";

import Home from "../screencomponents/homesScreens/Home";
import Profile from "./drawerbar/Profile";
import ChooseLangusge from "./drawerbar/ChooseLangusge";
import OneView from "./drawerbar/OneView";
import DeviceManagement from "./drawerbar/DeviceManagement";
import Settings from "./drawerbar/Settings";
import Notifications from "./drawerbar/Notifications";
import ChatWithKeya from "./drawerbar/ChatWithKeya";
import HelpandSupport from "./drawerbar/HelpandSupport";
import ContactUs from "./drawerbar/ContactUs";
import AddCRN from "./drawerbar/AddCRN";
import ChangeMPIN from "./drawerbar/ChangeMPIN";
import ApproveNetBankingLogin from "./drawerbar/ApproveNetBankingLogin";
import FraudAndDispute from "./drawerbar/FraudAndDispute";
import HowtoVideo from "./drawerbar/HowtoVideo";

const Drawer = createDrawerNavigator();

const SideNavitor = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return (
                    <SafeAreaView>
                        <View style={styles.drawerUserContainer}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 }}>
                                <View style={styles.UserImgContainer}>
                                    <Image source={userImage} style={styles.UserIImages} resizeMode="contain" />
                                </View>
                                <View>
                                    <Text style={styles.userName}>NARESH SIGAR</Text>
                                    <Text style={styles.userCRN}>CRN 673092406</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.UserLastLoged}>Last Login: 06-03-2024 22:41:30 (IST)</Text>
                            </View>
                        </View>
                          <DrawerItemList {...props} /> 
                    </SafeAreaView>
                );
            }}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
                    width: 250,
                },
                headerStyle: { backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed },
                headerTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                headerTitleStyle: { fontWeight: "500" },
                drawerActiveTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                drawerLabelStyle: { color: GlobalTheme.App_Theme.darkBlackColor },
            }}
        >
        
            <Drawer.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed,
                    },
                    headerLeft: () => (
                        <View style={{ left: 10 }}>
                            <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <Pressable style={styles.userView} onPress={() => navigation.openDrawer()}>
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
                            <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
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
            />
            <Drawer.Screen
                name="Profile"
                options={({ navigation }) => ({
                    drawerLabel: "Profiles",
                    title: "Profile",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={Profile}
            />
            <Drawer.Screen
                name="Choose Language"
                options={({ navigation }) => ({
                    drawerLabel: "Choose Language",
                    title: "Choose Language",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={ChooseLangusge}
            />
            <Drawer.Screen
                name="One View"
                options={({ navigation }) => ({
                    drawerLabel: "One View",
                    title: "One View",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={OneView}
            />
            <Drawer.Screen
                name="Device Management"
                options={({ navigation }) => ({
                    drawerLabel: "Device Management",
                    title: "Device Management",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={DeviceManagement}
            />
            <Drawer.Screen
                name="Setting"
                options={({ navigation }) => ({
                    drawerLabel: "Setting",
                    title: "Setting",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={Settings}
            />
            <Drawer.Screen
                name="Notification"
                options={({ navigation }) => ({
                    drawerLabel: "Notification",
                    title: "Notification",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={Notifications}
            />
            <Drawer.Screen
                name="Chat With KEYA"
                options={({ navigation }) => ({
                    drawerLabel: "Chat With KEYA",
                    title: "Chat With KEYA",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={ChatWithKeya}
            />
            <Drawer.Screen
                name="Help And Support"
                options={({ navigation }) => ({
                    drawerLabel: "Help And Support",
                    title: "Help And Support",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={HelpandSupport}
            />
            <Drawer.Screen
                name="Contact Us"
                options={({ navigation }) => ({
                    drawerLabel: "Contact Us",
                    title: "Contact Us",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={ContactUs}
            />
            <Drawer.Screen
                name="Add CRN"
                options={({ navigation }) => ({
                    drawerLabel: "Add CRN",
                    title: "Add CRN",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={AddCRN}
            />
            <Drawer.Screen
                name="Change MPIN"
                options={({ navigation }) => ({
                    drawerLabel: "Change MPIN",
                    title: "Change MPIN",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={ChangeMPIN}
            />
            <Drawer.Screen
                name="Approve Net Banking Login"
                options={({ navigation }) => ({
                    drawerLabel: "Approve Net Banking Login",
                    title: "Approve Net Banking Login",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={ApproveNetBankingLogin}
            />
            <Drawer.Screen
                name="Fraud And Dispute"
                options={({ navigation }) => ({
                    drawerLabel: "Fraud And Dispute",
                    title: "Fraud And Dispute",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={FraudAndDispute}
            />
            <Drawer.Screen
                name="How-to Videos"
                options={({ navigation }) => ({
                    drawerLabel: "How-to Videos",
                    title: "How-to Videos",
                    drawerIcon: () => <Ionicons name="home" size={20} color="#808080" />,
                })}
                component={HowtoVideo}
            />
        </Drawer.Navigator>
    );
};

export default SideNavitor;

const styles = StyleSheet.create({
    drawerUserContainer: {
        backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed,
        width: "100%",
        padding: 15,
    },
    UserImgContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: "#ffffff91",
        alignItems: "center",
        justifyContent: "center",
    },
    UserIImages: {
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    userName: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "800",
        fontSize: 15,
    },
    userCRN: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "400",
        fontSize: 14,
    },
    UserLastLoged: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "400",
        fontSize: 12,
    },
    userImage: {
        width: 120,
        height: 50,
        resizeMode: "contain",
    },
});
