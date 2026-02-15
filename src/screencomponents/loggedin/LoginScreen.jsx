import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, ScrollView, StatusBar, TextInput, SafeAreaView, Image, ToastAndroid, Alert, Modal, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess, setLoginTime } from "../../Redux/Slices/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import logo from '../../assets/logo/kotak-logo.webp'
import bgImage from '../../assets/onboarding_img/bg-images-family.jpg'

const Login = ({ navigation }) => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [MobileNumberTrue, setMobileNumberTrue] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const dispatch = useDispatch();

    const handleLogin = async () => {
        setIsVisible(true);
        const header = {
            "content-Type": "application/json",
        };
        const body = { mobile: mobile, password: password };
        try {
            let response = await axios.post(`https://kbank.digital-krishna.in/api/user_login`, body, {
                headers: header,
            });
            if (response.status == 200 || response.status == 201) {
                setIsVisible(false);
                // console.log(response.data.data.token, 'ppppppppppppppppppppp');
                // console.log(response.data.data, 'ppppppppppppppppppppp');
                await AsyncStorage.setItem("authToken", response.data.data.token);
                await AsyncStorage.setItem("identify", response.data.data.identify);
                await dispatch(setLoginTime("first"));
                dispatch(loginSuccess(response?.data?.data));
                ToastAndroid.show(response.data.message, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                // navigation.navigate("homes")
                // dispatch(loginSuccess())
            } else {
                setIsVisible(false);

                // Alert.alert(response);
                console.log("eror in else part");
            }
        } catch (error) {
            setIsVisible(false);
            console.log(error);
            if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors;
                errors.forEach((errorMessage) => {
                    ToastAndroid.showWithGravity(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                });
            } else {
                // If the error structure is unexpected, display a generic error message
                ToastAndroid.showWithGravity("An error occurred", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
        }
    };
    return (
      <ImageBackground source={bgImage}
          resizeMode="cover"
          style={styles.loginContainer}> 
            <StatusBar barStyle="light-content" backgroundColor="#141326" />
            <View>
                <Modal animationType="fade" visible={isVisible} transparent={true}>
                    <View style={[styles.modalView]}>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    </View>
                </Modal>
            </View>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
                <View style={{ alignItems: "center", marginBottom:70 }}>
                     <Image source={logo} style={styles.LogoImage} resizeMode='contain' />
                </View>
                <View style={{ marginVertical: 8, width:'100%' }}> 
                    <TextInput style={styles.TextInput} placeholder="Enter Phone Number" keyboardType="decimal-pad" placeholderTextColor="gray" value={mobile} onChangeText={(text) => setMobile(text)} />
                </View>
                <View style={{ marginVertical: 8, width:'100%' }}> 
                    <TextInput style={styles.TextInput} placeholder="Your password" placeholderTextColor="gray" textContentType="password" value={password} onChangeText={(text) => setPassword(text)} keyboardType="numbers-and-punctuation" />
                </View>
                <View style={{width:'100%'}}>
                    <TouchableOpacity
                        style={[styles.ContinueGoogleBtn, {width:'100%'}]}
                        onPress={() => {
                            if (mobile || password) {
                                handleLogin();
                            } else {
                                ToastAndroid.showWithGravity("Please fill below feilds", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                            }
                        }}
                    >
                        <Text
                            style={{
                                    fontSize: 16,
                                    fontWeight: "600",
                                    color: "#000", 
                                }}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View> 
            </SafeAreaView> 
      </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flex: 1,
    },
    SafeAreaViewContainer: {
        backgroundColor: '#ff000082',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width:'100%'
    },
    
    LogoImage: {
      width: 200,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center', 
  },

    TextInput: {
        width: "100%",
        backgroundColor:'#ffffffb0',
        borderRadius: 8,
        borderWidth: 1,
        borderColor:'#fff',
        height: 53,
        paddingHorizontal: 20,
        color: "#000",
        fontWeight: "500",
        marginBottom: 10,
    }, 
    ContinueGoogleBtn: {  
        height: 45,
        width: "100%", 
        borderRadius: 5, 
        backgroundColor:'#fff', 
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    modalView: {
        backgroundColor: "#3c40434d",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: "100%",
        flex: 1,
    },
});
