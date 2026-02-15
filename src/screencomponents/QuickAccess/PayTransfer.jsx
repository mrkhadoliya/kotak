import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GlobalTheme from '../../../GlobalTheme'


import transfermoney from '../../assets/icons/transfer-money.png'
import scanqr from '../../assets/icons/scan-any-qr.png'
import onetime from '../../assets/icons/one-time-transfer.png'
import payyourcontact from '../../assets/icons/pay-your-contact.png'
import addbinifical from '../../assets/icons/add-binifical.png'
import billpay from '../../assets/icons/bill-pay.png' 
import bhimupi from '../../assets/icons/bhim-upi.png' 

const PayTransfer = () => {
    return (
        <SafeAreaView> 
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={transfermoney} resizeMode='contain' style={styles.IconImage} />    
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Transfer Money</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={billpay} resizeMode='contain' style={[styles.IconImage, {width:25}]} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Bill Pay & Recharge</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={bhimupi} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>BHIM UPI</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={scanqr} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Scan Any QR</Text></View>
                </View>
            </View>
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={onetime} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>One Time Transfer</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={payyourcontact} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Pay your Contact</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={addbinifical} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Add/Manage Beneficiry</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={[styles.Pressablebtn, styles.SeeMoreBtn ]}>
                        <MaterialCommunityIcons name="chevron-right" size={30} color={GlobalTheme.App_Theme.PrimaryWhite} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={[styles.PayConText, {color:'#ff0000'}]}>See More</Text></View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default PayTransfer

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
        borderRadius: 20,
        backgroundColor:  GlobalTheme.App_Theme.PrimaryWhite,
        alignItems: 'center',
        justifyContent: 'center',
        height:36,
    },
    PayConText: {
        fontSize: 10,
        color:  GlobalTheme.App_Theme.darkBlackColor,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center'
    },
    IconImage:{
      width:36,
      height:36, 
    },
    SeeMoreBtn:{
        backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed,
        borderRadius:100,
        width:33,
        height:33
    }
})