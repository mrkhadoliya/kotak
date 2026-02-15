import { Pressable, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react' 
import GlobalTheme from '../../../GlobalTheme'
import payyourcontact from '../../assets/icons/pay-your-contact.png'
import loancard from '../../assets/icons/loan-and-card-offer.png'
import accountover from '../../assets/icons/AcountOverIcons.png'
import accountactive from '../../assets/icons/AccountActive.png'

const QuickAccessList = ({navigation}) => {
  return (
    <SafeAreaView style={styles.PaySafeCOntainer}>
      <View style={styles.WidthViewPay}>
        <Pressable style={styles.Pressablebtn}> 
            <Image source={payyourcontact} resizeMode='contain' style={styles.IconImage} />
        </Pressable>
        <View style={{height:34}}>
        <Text style={styles.PayConText}>Pay your Contact</Text></View>
      </View>
      <View style={[styles.WidthViewPay]}>
        <Pressable style={styles.Pressablebtn}> 
            <Image source={loancard} resizeMode='contain' style={styles.IconImage} />
        </Pressable>
        <View style={{height:34}}>
        <Text style={styles.PayConText}>Loan & Card Offers</Text></View>
      </View>
      <View style={styles.WidthViewPay}>
        <Pressable style={styles.Pressablebtn} onPress={() => navigation.navigate('account activity')}>
          <Image source={accountactive} resizeMode='contain' style={[styles.IconImage, {width:29}]} />
        </Pressable>
        <View style={{height:34}}>
        <Text style={styles.PayConText}>Account Activity</Text></View>
      </View>
      <View style={styles.WidthViewPay}>
        <Pressable style={styles.Pressablebtn} onPress={() => navigation.navigate('account overview')}> 
          <Image source={accountover} resizeMode='contain' style={styles.IconImage} />
        </Pressable>
        <View style={{height:34}}>
        <Text style={styles.PayConText}>Account Overview</Text></View>
      </View>
    </SafeAreaView>
  )
}

export default QuickAccessList

const styles = StyleSheet.create({
  PaySafeCOntainer:{
    marginVertical:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    gap:10
  },
  WidthViewPay:{
    width:'22%',
    alignItems:'center',
    justifyContent:'center',
  },
  Pressablebtn:{
    width:50,
    height:50, 
    borderRadius:15, 
    backgroundColor:GlobalTheme.App_Theme.PrimaryWhite, 
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.18,
    shadowRadius: 4.59,
    elevation: 4
  }, 
  IconImage:{
    width:35,
    height:35, 
  },
  PayConText:{
    fontSize:10,
    color:GlobalTheme.App_Theme.darkBlackColor,
    fontWeight:'500',
    marginTop:10,
    textAlign:'center',
    alignSelf:'center'
  },
})