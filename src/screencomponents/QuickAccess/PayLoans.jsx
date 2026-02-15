import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import GlobalTheme from '../../../GlobalTheme'


import FreeCredit from '../../assets/icons/free-credit-srore.png'
import LoanCard from '../../assets/icons/loan-and-card-offer.png'
import PersonalLoan from '../../assets/icons/personal-loan.png'
import HomeLoan from '../../assets/icons/homeloan.png'
import PayDay from '../../assets/icons/pay-day-loan.png'
import ConsumerDurable from '../../assets/icons/consumer-durable-loan.png'
import PayOverdue from '../../assets/icons/payover-due-emi.png'

const PayLoans = () => {
    return (
        <SafeAreaView> 
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={FreeCredit} style={styles.IconImage} />    
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Free Credit Score</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={LoanCard} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Loan and Card Offers</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={PersonalLoan} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Personal Loan</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={HomeLoan} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Home Loan</Text></View>
                </View>
            </View>
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={PayDay} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Pay Day Loan </Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={ConsumerDurable} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Consumer Durable Loan</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={PayOverdue} style={styles.IconImage} />
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Pay Overdue EMI</Text></View>
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

export default PayLoans

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
    },
    PayConText: {
        fontSize: 9,
        color:  GlobalTheme.App_Theme.darkBlackColor,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center'
    },
    SeeMoreBtn:{
        backgroundColor: GlobalTheme.App_Theme.PrimaryBgRed,
        borderRadius:100,
        width:33,
        height:33
    }
})