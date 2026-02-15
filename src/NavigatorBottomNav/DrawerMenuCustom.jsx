<<<<<<< HEAD
import { StyleSheet, Text, View, Image, Modal, ActivityIndicator } from "react-native";
import React, { useState } from "react";
=======
import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import userImage from "../assets/users-b.png";
import GlobalTheme from "../../GlobalTheme";
import Ionicons from 'react-native-vector-icons/Ionicons' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSuccess, logoutSuccess } from "../Redux/Slices/AuthSlice";


const DrawerMenuCustom = (props) => {
    const user = useSelector(state => state.Auth.user)
    // console.log(user,'user')
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
    const handleLogOut=async()=>{
     setLoading(true)
        try {
            const result = await AsyncStorage.removeItem("authToken")
            const result1 = await AsyncStorage.removeItem("identify")
            dispatch(logoutSuccess())
            await AsyncStorage.clear()
            setLoading(false)
        } catch (error) {
            console.log(error,'error')
            setLoading(false)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Modal
                    animationType='fade'
                    visible={loading}
                    transparent={true}

                >
                    <View style={[styles.modalView]}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    </View>
                </Modal>
            </View>
=======


const DrawerMenuCustom = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
            <View style={styles.drawerUserContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <View style={styles.UserImgContainer}>
                        <Image source={userImage} style={styles.UserIImages} resizeMode="contain" />
                    </View>
                    <View>
<<<<<<< HEAD
                        <Text style={styles.userName}>{user !==undefined || null ? user.name : 'NARESH SIGAR'}</Text>
=======
                        <Text style={styles.userName}>NARESH SIGAR</Text>
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
                        <Text style={styles.userCRN}>CRN 673092406</Text>
                    </View>
                </View>
                <View>
<<<<<<< HEAD
                    <Text style={styles.UserLastLoged}>Last Login: {user['last login']}</Text>
=======
                    <Text style={styles.UserLastLoged}>Last Login: 06-03-2024 22:41:30 (IST)</Text>
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
                </View>
            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.HomeLogoutContainer}>
            <View style={styles.lineVertical} />
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent:'space-around', width:'100%'}}>
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Ionicons name="home-outline" size={20} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.powerOffText}>Home</Text>
                    </View>
<<<<<<< HEAD
                    <TouchableOpacity style={{alignItems:'center', justifyContent:'center'}} onPress={()=>handleLogOut()}>
                        <AntDesign name="poweroff" size={18} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.powerOffText}>Logout</Text>
                    </TouchableOpacity>
=======
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <AntDesign name="poweroff" size={18} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.powerOffText}>Logout</Text>
                    </View>
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
                </View>
            </View>

        </SafeAreaView>
    );
};

export default DrawerMenuCustom;

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
<<<<<<< HEAD

=======
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
    UserLastLoged: {
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight: "400",
        fontSize: 12,
    },
<<<<<<< HEAD

=======
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
    userImage: {
        width: 120,
        height: 50,
        resizeMode: "contain",
    },
<<<<<<< HEAD

=======
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
    HomeLogoutContainer:{
        backgroundColor: '#0e2f4d',
        padding:15,
        alignItems:'center',
        justifyContent:'center', 
        position:'relative',
        overflow:'hidden'
    },
<<<<<<< HEAD

=======
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
    powerOffText:{
        color:GlobalTheme.App_Theme.PrimaryWhite,
        fontSize:15,
        fontWeight:'400', 
    },
<<<<<<< HEAD

=======
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
    lineVertical:{
        position:'absolute',
        // top:0, 
        // bottom:0,
        width:0.4,
        height: 80,
        backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
<<<<<<< HEAD
    },
    modalView: {
        backgroundColor: '#3c40434d',
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: '100%',
        flex: 1
    },
=======
    }
>>>>>>> a4ea51ad68bc04456ef9a9a217ef6934af14dffa
});
