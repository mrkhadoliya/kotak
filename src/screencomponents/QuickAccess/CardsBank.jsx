import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react' 
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 
import GlobalTheme from '../../../GlobalTheme'



import creditcard from '../../assets/icons/credit-card.png'
import debitCard from '../../assets/icons/debit-card-spnzd.jpg'
import forexcard from '../../assets/icons/forex-card.png'
import bestcomplement from '../../assets/icons/best-complement-card.png'
import smartemi from '../../assets/icons/smart-emi-card.png'
import fastag from '../../assets/icons/netc-fastag.png'
import imagecard from '../../assets/icons/image-debit-card.png'

const CardsBank = () => {
    return (
        <SafeAreaView> 
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                        <Image source={creditcard} style={styles.IconImage} />    
                    </Pressable>
                    <View style={{height:40}}>
                        <Text style={styles.PayConText}>Credit Card</Text> 
                    </View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={debitCard} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Debit Card / Spendz Card</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={forexcard} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Forex Card</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={bestcomplement} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Best Compliments Card</Text></View>
                </View>
            </View>
            <View style={styles.PaySafeCOntainer}>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={smartemi} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Smart EMI Card</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={fastag} style={styles.IconImage} resizeMode='contain' /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>FASTag</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={styles.Pressablebtn}>
                    <Image source={imagecard} style={styles.IconImage} /> 
                    </Pressable>
                    <View style={{height:40}}>
                    <Text style={styles.PayConText}>Image Debit Card</Text></View>
                </View>
                <View style={styles.WidthViewPay}>
                    <Pressable style={[styles.Pressablebtn, styles.SeeMoreBtn ]}>
                        <MaterialCommunityIcons name="chevron-right" size={30} color={GlobalTheme.App_Theme.PrimaryWhite} />
                    </Pressable>
                    <View style={{height:40}}>
                        <Text style={[styles.PayConText, {color:GlobalTheme.App_Theme.PrimaryBgRed}]}>See More</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default CardsBank

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