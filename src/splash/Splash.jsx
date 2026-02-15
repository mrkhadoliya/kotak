import { ActivityIndicator, Image, ImageBackground, Modal, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import logo from '../assets/logo/kotak-logo.webp'
import Fontisto from 'react-native-vector-icons/Fontisto' 
import bgImage from '../assets/onboarding_img/bg-images-family.jpg'
import GlobalTheme from '../../GlobalTheme'


const Splash = ({ loading }) => {
    const [isVisible,setIsVisible] = useState(true)
    useEffect(() => {
   setTimeout(() => {
//    navigation.navigate('login')
    setIsVisible(false)
   }, 3000);
    }, [])
    
    return (
        <ImageBackground source={bgImage} resizeMode='cover' style={styles.ImageBackgrounds}> 
          <View>
                <Modal
                    animationType='fade'
                    visible={isVisible}
                    transparent={true}

                >
                    <View style={[styles.modalView]}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

                            <ActivityIndicator size="large" color="#0000ff" />
                        </View>
                    </View>
                </Modal>
            </View>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
                <StatusBar backgroundColor="#000" barStyle={'light-content'} />
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity>
                        <View style={{ marginBottom: 10, alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={logo} style={styles.LogoImage} resizeMode='contain' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 25 }}>
                    <View style={{flexDirection:'row', alignItems:'center', gap:5, justifyContent:'center'}}>
                        <Fontisto name='locked' size={18} color={GlobalTheme.App_Theme.PrimaryWhite} />
                        <Text style={styles.SecureBanking}>Secure Banking</Text>
                    </View>
                    <View>
                        <Text style={styles.alertText}>Alert! Please do not share OTP, PIN or Passwords with anyone</Text>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    ImageBackgrounds:{
        flex:1
    },
    SafeAreaViewContainer: {
        backgroundColor: '#ff000082',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    LogoImage: {
        width: 200,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    SecureBanking:{
        fontSize:17,
        color: GlobalTheme.App_Theme.PrimaryWhite,
        fontWeight:'500',
        borderBottomWidth:1,
        borderBottomColor: GlobalTheme.App_Theme.PrimaryWhite
    },
    alertText:{
        textAlign:'center',
        fontSize:16,
        color: GlobalTheme.App_Theme.PrimaryWhite,
        lineHeight:20,
        paddingVertical:15
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
})