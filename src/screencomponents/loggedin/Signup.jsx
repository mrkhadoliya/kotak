import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import googleI from '../../assets/logo/google-icon.png'


const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={styles.ContainerSafeView}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View style={styles.ContainerWelcome}> 
                <Text style={styles.MainHeading}>Create an Account</Text>
                <Text style={styles.subTextTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Text>
            </View>
            <View>
                <View style={{marginBottom:15}}>
                    <Text style={styles.emailTExt}>Full Name</Text>
                    <View> 
                        <TextInput style={styles.InputType} placeholder='Enter your Full Name' keyboardType='default' />
                    </View>
                </View>
                <View style={{marginBottom:15}}>
                    <Text style={styles.emailTExt}>Email</Text>
                    <View> 
                        <TextInput style={styles.InputType} placeholder='Enter your email' keyboardType='email-address' />
                    </View>
                </View>
                <View>
                    <Text style={styles.emailTExt}>Password</Text>
                    <View style={{position:'relative'}}> 
                        <TextInput style={styles.InputType} placeholder='Enter your password' keyboardType='visible-password' />
                        <TouchableOpacity style={styles.EyeICONS}>
                            <Entypo name="eye" size={30} color="#60778C" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{marginVertical:10}}>
                    <TouchableOpacity style={styles.ForgotPasswordBTN} onPress={() => navigation.navigate('')}>
                        <Text style={styles.forTextPass}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.LoginBtn} activeOpacity={0.7} onPress={() => navigation.navigate('signup')}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'600'}}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginGoogleBtn} activeOpacity={0.7}>
                        <Image source={googleI} resizeMode='contain' width={25} />
                        <Text style={{color:'#150B3D', fontSize:16, fontWeight:'600'}}>Sign-up with Google</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.TextSignUp}>You don't have an account yet? <Text style={{color:'#4EC133', fontWeight:'600'}}>Sign up</Text></Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    ContainerSafeView:{
        flex:1, backgroundColor:'#F9F9F9',
        padding:15
    },
    ContainerWelcome:{
        paddingVertical:20,
        marginBottom:15
    },
    MainHeading:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'700',
        color:'#000',
        marginBottom:10
    },
    subTextTitle:{
        textAlign:'center',
        lineHeight:22,
        fontSize:15,
        color:'#524B6B',
        fontWeight:'500'
    },
    emailTExt:{
        fontSize:15,
        fontWeight:'500',
        color:'#000'
    },
    InputType:{
        width:'100%', 
        marginVertical:10,
        paddingHorizontal:15,
        borderRadius:6,
        backgroundColor:'#fff',
        height:55,
        borderWidth:1,
        borderColor:'#F9F9F9',
        fontSize:15
    }, 
    EyeICONS:{
        position:'absolute',
        top:0,
        right:20,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },
    ForgotPasswordBTN:{
        alignSelf:'flex-end',
    },
    forTextPass:{
        fontSize:16,
        fontWeight:'500',
        color:'#4EC133'
    },
    LoginBtn:{
        backgroundColor:'#4EC133',
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:15
    },
    LoginGoogleBtn:{
        backgroundColor:'#4ec13373',
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:15,
        gap:15
    },
    TextSignUp:{
        textAlign:'center',
        fontSize:16
    },
})