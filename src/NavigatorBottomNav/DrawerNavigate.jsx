import {StyleSheet,} from "react-native";
import React from "react";
import {createDrawerNavigator } from "@react-navigation/drawer";  
import GlobalTheme from "../../GlobalTheme";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

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
import DrawerMenuCustom from "./DrawerMenuCustom";
import BottomTabNavigator from "./BottomTabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerMenuCustom {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
                    width: 250, 
                },
                headerStyle: { backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed, },
                headerTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                headerTitleStyle: { fontWeight: "300",backgroundColor:'red' },
                drawerActiveTintColor: GlobalTheme.App_Theme.PrimaryWhite,
                drawerItemStyle:{
                    borderRadius:0,
                    borderBottomWidth:1,
                    borderBottomColor:'#eee',
                    width:'100%', 
                    marginVertical:0,
                    marginHorizontal:0, 
                },
                drawerLabelStyle: { color: GlobalTheme.App_Theme.darkBlackColor, fontWeight:'400', fontSize:15, },
            }}
        >
        
            <Drawer.Screen
                name="Home"
                component={BottomTabNavigator}
                options={({ navigation }) => ({
                    headerShown:false,  
                    drawerIcon: () => <Ionicons name="home" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                    drawerContentStyle:{
                        
                    }
                })}
            />
            <Drawer.Screen
                name="Profile"
                options={({ navigation }) => ({
                    drawerLabel: "Profiles",
                    title: "Profile",
                    drawerIcon: () => <FontAwesome5 name="user-cog" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={Profile}
            />
            <Drawer.Screen
                name="Choose Language"
                options={({ navigation }) => ({
                    drawerLabel: "Choose Language",
                    title: "Choose Language",
                    drawerIcon: () => <FontAwesome name="language" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={ChooseLangusge}
            />
            <Drawer.Screen
                name="One View"
                options={({ navigation }) => ({
                    drawerLabel: "One View",
                    title: "One View",
                    drawerIcon: () => <Ionicons name="eye-outline" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={OneView}
            />
            <Drawer.Screen
                name="Device Management"
                options={({ navigation }) => ({
                    drawerLabel: "Device Management",
                    title: "Device Management",
                    drawerIcon: () => <MaterialIcons name="devices" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={DeviceManagement}
            />
            <Drawer.Screen
                name="Setting"
                options={({ navigation }) => ({
                    drawerLabel: "Setting",
                    title: "Setting",
                    drawerIcon: () => <MaterialIcons name="settings-suggest" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={Settings}
            />
            <Drawer.Screen
                name="Notification"
                options={({ navigation }) => ({
                    drawerLabel: "Notification",
                    title: "Notification",
                    drawerIcon: () => <Ionicons name="notifications-outline" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={Notifications}
            />
            <Drawer.Screen
                name="Chat With KEYA"
                options={({ navigation }) => ({
                    drawerLabel: "Chat With KEYA",
                    title: "Chat With KEYA",
                    drawerIcon: () => <Ionicons name="chatbox-ellipses-outline" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={ChatWithKeya}
            />
            <Drawer.Screen
                name="Help And Support"
                options={({ navigation }) => ({
                    drawerLabel: "Help And Support",
                    title: "Help And Support",
                    drawerIcon: () => <MaterialCommunityIcons name="chat-alert" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={HelpandSupport}
            />
            <Drawer.Screen
                name="Contact Us"
                options={({ navigation }) => ({
                    drawerLabel: "Contact Us",
                    title: "Contact Us",
                    drawerIcon: () => <Feather name="phone-call" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={ContactUs}
            />
            <Drawer.Screen
                name="Add CRN"
                options={({ navigation }) => ({
                    drawerLabel: "Add CRN",
                    title: "Add CRN",
                    drawerIcon: () => <Ionicons name="add" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={AddCRN}
            />
            <Drawer.Screen
                name="Change MPIN"
                options={({ navigation }) => ({
                    drawerLabel: "Change MPIN",
                    title: "Change MPIN",
                    drawerIcon: () => <MaterialIcons name="password" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={ChangeMPIN}
            />
            <Drawer.Screen
                name="Approve Net Banking Login"
                options={({ navigation }) => ({
                    drawerLabel: "Approve Net Banking Login",
                    title: "Approve Net Banking Login",
                    drawerIcon: () => <MaterialCommunityIcons name="bank-outline" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={ApproveNetBankingLogin}
            />
            <Drawer.Screen
                name="Fraud And Dispute"
                options={({ navigation }) => ({
                    drawerLabel: "Fraud And Dispute",
                    title: "Fraud And Dispute",
                    drawerIcon: () => <Feather name="alert-triangle" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={FraudAndDispute}
            />
            <Drawer.Screen
                name="How-to Videos"
                options={({ navigation }) => ({
                    drawerLabel: "How-to Videos",
                    title: "How-to Videos",
                    drawerIcon: () => <MaterialIcons name="smart-display" size={20} color={GlobalTheme.App_Theme.blueDarkTEXT} />,
                })}
                component={HowtoVideo}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigate;

const styles = StyleSheet.create({
    
});
