import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import GlobalTheme from '../../../GlobalTheme'


import kotak811 from '../../assets/logo/kotak811-logo1.png'
// import accountover from '../../assets/icons/account-overview.png'
// import accountactive from '../../assets/icons/account-conactivity.png'
import accountover from '../../assets/icons/AcountOverIcons.png'
import accountactive from '../../assets/icons/AccountActive.png'
import Statement from '../../assets/icons/statement.png'
import fixedrequred from '../../assets/icons/fixed-requred-deposit.png'
import digitalruppes from '../../assets/icons/digital-ruppes.png'
import activmoney from '../../assets/icons/activmoney.png'
import { useNavigation } from '@react-navigation/native'


const BankListItem = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView> 
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={kotak811} resizeMode='contain' style={styles.IconImage} />  
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Kotak811</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn} onPress={()=>navigation.navigate('account activity')}>
                        <Image source={accountactive} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Account Activity</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn} onPress={()=>navigation.navigate('account overview')}>
                        <Image source={accountover} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Account Overview</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={Statement} resizeMode='contain' style={styles.IconImage} />
                     </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Statement</Text></View>
                </View>
            </View>
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={fixedrequred} resizeMode='contain' style={styles.IconImage} /> 
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Fixed/Recurring Deposites</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={digitalruppes} resizeMode='contain' style={styles.IconImage} /> 
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>Digital Rupee</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={activmoney} resizeMode='contain' style={styles.IconImage} />
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={styles.PayConText}>ActivMoney</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={[styles.Pressablebtn, styles.SeeMoreBtn ]}>
                            <MaterialCommunityIcons name="chevron-right" size={30} color={ GlobalTheme.App_Theme.PrimaryWhite} />
                    </Pressable>
                        <View style={{height:40}}>
                    <Text style={[styles.PayConText, {color:'#ff0000'}]}>See More</Text></View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default BankListItem

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
        height:36
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