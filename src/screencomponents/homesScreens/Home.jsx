import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import bgImage from '../../assets/onboarding_img/header__image.jpg';
import QuickAccessList from '../QuickAccess/QuickAccessList';
import OfferSlider from '../QuickAccess/OfferSlider';
import BankListItem from '../QuickAccess/BankListItem';
import PayTransfer from '../QuickAccess/PayTransfer';
import PayLoans from '../QuickAccess/PayLoans';
import CardsBank from '../QuickAccess/CardsBank';
import InvestBank from '../QuickAccess/InvestBank';
import GlobalTheme from '../../../GlobalTheme';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setAccountActivityData, setBalance } from '../../Redux/Slices/AuthSlice';

const Home = ({navigation}) => {
  const userId = useSelector(state => state.Auth.user.id);
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);
  const [ClientData, setClientData] = useState(null);
  const [firstValue,setFirstValue] = useState('')
  const [firstValue1,setFirstValue1] = useState('')
  const [showBalance, setShowBalance] = useState(false);
  const toggleBalanceVisibility = () => {
    setShowBalance(!showBalance);
    
  };



  const dispatch = useDispatch()

  const getData = async () => {
    setIsVisible(true);
    const header = {
      'content-Type': 'application/json',
    };
    const body = {};
    try {
      let response = await axios.post(
        `https://kbank.digital-krishna.in/api/GetBanner`,
        body,
        {
          headers: header,
        },
      );
      if (response.status == 200 || response.status == 201) {
        let ImageArr = []
        await response?.data.map((item) =>{
          ImageArr.push({image:item.Image})
        })
        // console.log(response.data, 'ssssssssssssssssss');
        // ToastAndroid.show(
            //   response.data.message,
            //   ToastAndroid.SHORT,
            //   ToastAndroid.BOTTOM,
            // );
            // dispatch(loginSuccess())
            setData(ImageArr);
            setIsVisible(false);
      } else {
        setIsVisible(false);
        console.log('eror in else part');
      }
    } catch (error) {
      setIsVisible(false);

      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        errors.forEach(errorMessage => {
          ToastAndroid.showWithGravity(
            errorMessage,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        });
      } else {
        // If the error structure is unexpected, display a generic error message
        ToastAndroid.showWithGravity(
          'An error occurred',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    }
  };

  const getData1 = async () => {
    setIsVisible(true);
    const header = {
      'content-Type': 'application/json',
    };
    const body = {userId: userId};
    try {
      let response = await axios.post(
        `https://kbank.digital-krishna.in/api/TransactionDetails`,
        body,
        {
          headers: header,
        },
      );
      if (response.status == 200 || response.status == 201) {
        // console.log(response.data['net_balance'],'ppppkkk')
            setClientData(response.data)
            dispatch(setBalance(response.data))
            dispatch(setAccountActivityData(response.data.data))
            const [integerPart, decimalPart] = String(response?.data?.net_balance).split('.');
             setFirstValue(integerPart)
             setFirstValue1(decimalPart)
            setIsVisible(false);
      } else {
        setIsVisible(false);
        console.log('eror in else part');
      }
    } catch (error) {
      setIsVisible(false);
     console.log(error,'error')
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        errors.forEach(errorMessage => {
          ToastAndroid.showWithGravity(
            errorMessage,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
        });
      } else {
        // If the error structure is unexpected, display a generic error message
        ToastAndroid.showWithGravity(
          'An error occurred',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    }
  };

  useEffect(() => {
    getData();
    getData1()
  }, []);

  useEffect(() => {
    getData();
  }, []);
  // console.log(ClientData['account number'],'ClientData')
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
    <ScrollView showsVerticalScrollIndicator={false}>
    <StatusBar barStyle="light-content" backgroundColor="#000" />
        <ImageBackground
          source={bgImage}
          resizeMethod="auto"
          resizeMode="cover"
          style={styles.ImageBackgrounds}>
          <View style={styles.SavingContainers}>
            <View style={styles.flexDir}>
              <View>
                <Text style={styles.SavingsText}>Savings</Text>
                <Text style={styles.SavingsNuText}>{ClientData ? ClientData['account number'] : ''}</Text>
              </View>
              <View>
                <Pressable
                  style={styles.ViewBalanceBtn}
                  onPress={toggleBalanceVisibility}>
                  <Text style={styles.ViewBalanceText}>
                    {showBalance ? (
                      <Text style={{fontWeight: '800'}}>
                        {ClientData ? `INR ${firstValue}.` : "INR 532.04"}
                      </Text>
                    ) : (
                      'View Balance'
                    )}
                  </Text>
                  <Text style={[styles.ViewBalanceText,{fontSize:14,marginTop:2}]}>
                    {showBalance ? (
                      <Text style={{fontWeight: '800',fontSize:12}}>
                        {ClientData ? `${firstValue1}` : "INR 04"}
                      </Text>
                    ) : (
                      ''
                    )}
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
        <View style={{paddingHorizontal: 10, paddingTop:10}}>
          <View>
            <Text style={styles.QuickAccessTitle}>Quick Access</Text>
            <QuickAccessList navigation={navigation} />
          </View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <OfferSlider data={data}/>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 7}}>
          <View style={styles.BankContainers}>
            <Text style={[styles.QuickAccessTitle, {marginTop: 7}]}>Bank</Text>
            <BankListItem />
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <View style={styles.BankContainers}>
            <Text style={[styles.QuickAccessTitle, {marginTop: 7}]}>
              Pay & Transfer
            </Text>
            <PayTransfer />
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <View style={styles.BankContainers}>
            <Text style={[styles.QuickAccessTitle, {marginTop: 7}]}>Loans</Text>
            <PayLoans />
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginTop: 10}}>
          <View style={styles.BankContainers}>
            <Text style={[styles.QuickAccessTitle, {marginTop: 7}]}>Cards</Text>
            <CardsBank />
          </View>
        </View>
        <View style={{paddingHorizontal: 10, marginVertical: 10}}>
          <View style={styles.BankContainers}>
            <Text style={[styles.QuickAccessTitle, {marginTop: 7}]}>
              Invest
            </Text>
            <InvestBank />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#fff5f5',
  },
  ImageBackgrounds: {},
  SavingContainers: {
    backgroundColor: '#ff000082',
    padding: 15,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexDir: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ViewBalanceBtn: {
    backgroundColor: '#b31111',
    paddingHorizontal: 16,
    paddingVertical: 7,
    flexDirection:"row",
    alignItems:"center"
  },
  ViewBalanceText: {
    color: GlobalTheme.App_Theme.PrimaryWhite,
    fontSize: 15,
    fontWeight: '400',
  },
  SavingsText: {
    fontSize: 14,
    fontWeight: '400',
    color: GlobalTheme.App_Theme.PrimaryWhite,
  },
  SavingsNuText: {
    fontSize: 18,
    fontWeight: '600',
    color: GlobalTheme.App_Theme.PrimaryWhite,
  },
  QuickAccessTitle: {
    color: GlobalTheme.App_Theme.darkBlackColor,
    fontSize: 16,
    fontWeight: '600',
  },
  BankContainers: {
    borderRadius: 15,
    backgroundColor: GlobalTheme.App_Theme.PrimaryWhite,
    marginVertical: 5,
    padding: 13,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 2,
  },
});
