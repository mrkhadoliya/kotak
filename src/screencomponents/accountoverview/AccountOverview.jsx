import {
    ActivityIndicator,
  Image,
  ImageBackground,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlobalTheme from '../../../GlobalTheme';
import GoogleAss from '../../assets/logo/google-assistant-logo.png';
import SavingAccount from '../savingAccounts/SavingAccount';
import BGDotimg from '../../assets/white-dotted-bg.png';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useSelector} from 'react-redux';

const AccountOverview = () => {
  const userId = useSelector(state => state.Auth.user.id);
  const BalanceData = useSelector(state => state.Auth.balance);
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);
  const [firstValue,setFirstValue] = useState('')
  const [firstValue1,setFirstValue1] = useState('')
  const [firstValue2,setFirstValue2] = useState('')
  const [firstValue3,setFirstValue3] = useState('')
  const getData = async () => {
    setIsVisible(true);
    const header = {
      'content-Type': 'application/json',
    };
    const body = {userId: userId};
    try {
      let response = await axios.post(
        `https://kbank.digital-krishna.in/api/AccountOverview`,
        body,
        {
          headers: header,
        },
      );
      if (response.status == 200 || response.status == 201) {
        // ToastAndroid.show(
            //   response.data.message,
            //   ToastAndroid.SHORT,
            //   ToastAndroid.BOTTOM,
            // );
            // dispatch(loginSuccess())
            setData(response.data);
          const [integerPart, decimalPart] =(response.data["withdrawable balance"]).split('.');
          const [integerPart1, decimalPart1] =(response.data["available balance"]).split('.');
          setFirstValue(integerPart)
          setFirstValue1(decimalPart)
          setFirstValue2(integerPart1)
          setFirstValue3(decimalPart1)
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

  useEffect(() => {
    getData();
  }, []);

  console.log(firstValue,firstValue1,'pppppppppppppppppppppp')

  

//   let object = {
//     acc_number: '482810110017076',
//     account_name: 'Manoj Kumar Saini',
//     'available balance': 500,
//     bank_name: 'BOB',
//     ifsc_code: 'BKID0004828',
//     'last login': '2024-04-01 19:44:12',
//     message: 'Account Overview show successful',
//     mmid: '41522',
//     name: 'manoj saini',
//     nominee: 'No',
//     'withdrawable balance': 500,
//   };

  return (
    <ImageBackground source={BGDotimg} resizeMode="cover" style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, backgroundColor: '#ffffffbd'}}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView style={styles.SafeAreaViewContainer}>
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
          <View style={{marginBottom: 15}}>
            <SavingAccount navigation={navigation}
            AccountNumber={BalanceData ? BalanceData['account number'] : ''}
            /> 
          </View>
          <View>
            <View style={styles.paddingHorizontal}>
              <View style={styles.FlexViewWithdra}>
                <View>
                  <Text style={styles.WithdraNameText}>
                    Withdrawable Balance (INR)
                  </Text>
                  <Text style={styles.WithdraPriceText}>
                 
                    {data ? `${firstValue}.` : '100'} 
                      {data ?  <Text style={{ fontSize: 14, marginLeft: -10 }}>{firstValue1}  </Text> : '00'}

                  </Text>
                </View>
                <View>
                  <Text style={styles.activeHeadingText}>Active</Text>
                </View>
              </View>
            </View>
            <View style={styles.DividerLine} />
            <View style={styles.paddingHorizontal}>
              <View style={[styles.FlexViewWithdra, styles.GreebBor]}>
                <View>
                  <Text style={styles.WithdraNameText}>
                    Available Balance (INR)
                  </Text>
                  <Text
                    style={[
                      styles.WithdraPriceText,
                      {color: GlobalTheme.App_Theme.greenText},
                    ]}>
                   
                   {data ? `${firstValue2}.` : '100'} 
                      {data ?  <Text style={{ fontSize: 14, marginLeft: -10 }}>{firstValue3}  </Text> : '00'}
                  </Text>
                </View>
                <View>
                  <Text
                    style={[
                      styles.activeHeadingText,
                      {
                        textAlign: 'right',
                        color: GlobalTheme.App_Theme.GreyTextColor,
                      },
                    ]}>
                    Uncleared (INR)
                  </Text>
                  <Text
                    style={[
                      styles.WithdraPriceText,
                      {
                        textAlign: 'right',
                        color: GlobalTheme.App_Theme.PrimaryBgRed,
                      },
                    ]}>
                    0.<Text style={{fontSize: 16}}>00</Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.DividerLine} />

            <View style={[styles.mmIDView, styles.flexDirectionRow]}>
              <View>
                <Text style={styles.MMIDHeadding}>MMID</Text>
                <Text style={styles.MMIDNumberText}>
                  {data ? data.mmid : 9485965}
                </Text>
              </View>
              <View>
                <Text style={styles.AccountNameText}>Account Name</Text>
                <Text style={styles.AccountHolderName}>
                  {data ? data.account_name : 'User'}
                </Text>
                {/* <Text style={styles.AccountHolderName}>SIGAR</Text> */}
              </View>
            </View>
            <View style={styles.DividerLine} />
            <View style={[styles.mmIDView, styles.flexDirectionRow]}>
              <View>
                <Text style={styles.NomineeText}>Nominee</Text>
                <Text style={styles.NomineeYesText}> {data ? data.nominee : 'yes/no'}</Text>
              </View>
              <View>
                <Text style={styles.IFSCText}>IFSC</Text>
                <Text style={styles.IFSCNumbers}>{data ? data.ifsc_code : 'KKBK0003554'}</Text>
              </View>
            </View>
            <View style={styles.DividerLine} />

            <View style={{padding: 15}}>
              <TouchableOpacity style={styles.TransactionsButtons} onPress={()=>navigation.navigate('account activity')}>
                <Text style={styles.TransactionsTextHeading}>
                  View Transactions
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.TransactionsButtons}>
                <Text style={styles.TransactionsTextHeading}>
                  Transfer Money
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <View style={{padding: 15, marginVertical: 8}}>
          <View
            style={[
              styles.flexDirectionRow,
              {justifyContent: 'center', gap: 20},
            ]}>
            <View>
              <Image
                source={GoogleAss}
                resizeMode="contain"
                style={styles.Image}
              />
            </View>
            <TouchableOpacity style={styles.AllowAccessButton}>
              <Text style={styles.AllowAccessHeadeing}>Allow</Text>
              <Text style={styles.AllowAccessHeadeing}>Access</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 15}}>
            <Text style={styles.GoogleVoiceTExt}>
              You can use your voice to check your balance by
            </Text>
            <Text style={styles.GoogleVoiceTExt}>
              saying "OK Google, show my Kotak balance"
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AccountOverview;

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    paddingBottom: 10,
  },
  flexDirectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
    backgroundColor: '#e7e4e4',
  },
  FlexViewWithdra: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderLeftWidth: 5,
    borderLeftColor: GlobalTheme.App_Theme.blueDarkTEXT,
  },
  GreebBor: {
    borderLeftColor: GlobalTheme.App_Theme.greenText,
    borderRightColor: GlobalTheme.App_Theme.PrimaryBgRed,
    borderRightWidth: 5,
  },
  WithdraNameText: {
    fontSize: 14,
    fontWeight: '400',
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  WithdraPriceText: {
    fontSize: 20,
    color: GlobalTheme.App_Theme.blueDarkTEXT,
    fontWeight: '900',
  },
  activeHeadingText: {
    color: GlobalTheme.App_Theme.greenText,
    fontSize: 14,
    fontWeight: '500',
  },
  DividerLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1',
  },
  mmIDView: {
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  MMIDHeadding: {
    fontSize: 13,
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  MMIDNumberText: {
    fontWeight: '400',
    fontSize: 14,
    color: GlobalTheme.App_Theme.darkBlackColor,
  },
  AccountNameText: {
    textAlign: 'right',
    fontSize: 14,
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  AccountHolderName: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 14,
    color: GlobalTheme.App_Theme.darkBlackColor,
  },
  NomineeText: {
    fontSize: 14,
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  NomineeYesText: {
    fontWeight: '400',
    fontSize: 15,
    color: GlobalTheme.App_Theme.darkBlackColor,
  },
  IFSCText: {
    textAlign: 'right',
    fontSize: 15,
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  IFSCNumbers: {
    textAlign: 'right',
    fontWeight: '400',
    fontSize: 15,
    color: GlobalTheme.App_Theme.darkBlackColor,
  },
  TransactionsButtons: {
    borderRadius: 7,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e4e4',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: GlobalTheme.App_Theme.GreyTextColor,
    borderBottomWidth: 4,
    borderBottomColor: GlobalTheme.App_Theme.GreyTextColor,
  },
  TransactionsTextHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: GlobalTheme.App_Theme.darkBlackColor,
  },
  Image: {
    width: 170,
    height: 50,
  },
  AllowAccessButton: {
    borderWidth: 1,
    borderColor: GlobalTheme.App_Theme.GreyTextColor,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  AllowAccessHeadeing: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
    color: GlobalTheme.App_Theme.GreyTextColor,
  },
  GoogleVoiceTExt: {
    textAlign: 'center',
    lineHeight: 25,
    fontSize: 16,
    color: GlobalTheme.App_Theme.GreyTextColor,
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
});
