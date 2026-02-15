import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'  
import GlobalTheme from '../../../GlobalTheme'


import sip from '../../assets/icons/sip.png'
import stocks from '../../assets/icons/stocks.png'
import fixedde from '../../assets/icons/fixed-requred-deposit.png'
import nationalpension from '../../assets/icons/national-pension-system.png'
import ipo from '../../assets/icons/ipo.png'
import pansionyojna from '../../assets/icons/stal-pansion-yojna.jpg'

const InvestBank = () => {
    return (
        <SafeAreaView> 
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={sip} style={styles.IconImage} />    
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Start SIP</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>   
                        <Image source={stocks} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Stocks</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={fixedde} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Fixed/Recurring Deposits</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={nationalpension} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>National Pension System</Text></View>
                </View>
            </View>
            <View style={[styles.PaySafeCOntainer, {justifyContent:'flex-start'}]}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={ipo} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>IPO (ASBA)</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={pansionyojna} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Atal Pension Yojana</Text></View>
                </View> 
            </View>

        </SafeAreaView>
    )
}

export default InvestBank

const styles = StyleSheet.create({
    PaySafeCOntainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap:10 
    },
    WidthViewPay: {
        width: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Pressablebtn: {
        height:36,
        borderRadius: 20,
        backgroundColor:  GlobalTheme.App_Theme.PrimaryWhite,
        alignItems: 'center',
        justifyContent: 'center',
    },
    IconImage:{
      width:36,
      height:36,
      resizeMode:'contain'
    },
    PayConText: {
        fontSize: 9,
        color:  GlobalTheme.App_Theme.darkBlackColor,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center'
    }, 
})