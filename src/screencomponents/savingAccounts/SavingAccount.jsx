import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalTheme from '../../../GlobalTheme' 
import gradinImage from '../../assets/savingGradinImg.png'

const SavingAccount = ({AccountNumber}) => {
  return ( 
        <View style={[styles.paddingHorizontal, styles.ViewShadow]}>
            <ImageBackground source={gradinImage} resizeMode='cover' style={{width:'100%', padding:2, height:45}} >
                <View style={[styles.SavingContainer]}>
                    <View style={styles.SavingsViewBgClr}>
                        <Text style={styles.SavingHeading}>Savings</Text>
                        <Text style={styles.savingAccountNum}>{AccountNumber ? AccountNumber : 987654321}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.BoxVIews} />
        </View> 
  )
}

export default SavingAccount

const styles = StyleSheet.create({
    paddingHorizontal: {
        paddingHorizontal: 10,
        paddingTop:6,
        // paddingBottom: 2,
        // height: 68,
        backgroundColor: "#e7e4e4",
        borderBottomWidth:1,
        borderBottomColor:'#A1A1A1'
    },
    ViewShadow: {
        position:'relative',
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5, 
    },
    SavingContainer: {
        // borderWidth: 1,
        // borderColor: "#8a8a8a",  
        overflow:'hidden',
    },
    SavingsViewBgClr: { 
        // paddingVertical: 2,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#cdf0ff75",
        // marginHorizontal: 70,
        // borderLeftWidth: 1,
        // borderRightWidth: 1,
        // borderRightColor: "#8a8a8a",
        // borderLeftColor: "#8a8a8a",
    },
    SavingHeading: {
        color: "#1B3C73",
    },
    savingAccountNum: {
        color: "#1B3C73",
        fontSize: 15,
        fontWeight: "600",
    },
    BoxVIews:{  
        width:10,
        height:10,
        backgroundColor:'#e7e4e4', 
        alignItems:'center',
        justifyContent:'center', 
        bottom:-6,  
        flexDirection:'row',
        transform: [{rotate: '45deg'}],
        borderRightWidth:1,
        borderBottomWidth:1,
        borderBottomColor:'#A1A1A1',
        borderRightColor:'#A1A1A1',
        alignSelf:'center'
    }
})