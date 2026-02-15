// import {
//     FlatList,
//     ImageBackground,
//     SafeAreaView,
//     StyleSheet,
//     Text,
//     ToastAndroid,
//     TouchableOpacity,
//     View,
//   } from 'react-native';
//   import React, {useEffect, useState} from 'react';
//   import SavingAccount from '../savingAccounts/SavingAccount';
//   import GlobalTheme from '../../../GlobalTheme';
//   import ClosingBalance from './ClosingBalance';
//   import AccountActivityTransList from './AccountActivityTransList';
//   import LinearGradient from 'react-native-linear-gradient';
//   import BGDotimg from '../../assets/white-dotted-bg.png';
//   import {useNavigation} from '@react-navigation/native';
//   import axios from 'axios';
//   import {useSelector} from 'react-redux';

// const AccountActivity = () => {
//   const navigation = useNavigation();
//   const ActivityData = useSelector(state => state.Auth.AccountActivityData);
//   const BalanceData = useSelector(state => state.Auth.balance);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     if (ActivityData) {
//       let sortedData = [...ActivityData].sort((a, b) => new Date(b.txn_date) - new Date(a.txn_date));
//       setData(sortedData);
//     }
//   }, [ActivityData]);

//   return (
//     <ImageBackground source={BGDotimg} resizeMode="cover" style={{ flex: 1 }}>
//       <SafeAreaView style={styles.SafeAreaViewContainer}>
//         <View style={{ marginBottom: 15 }}>
//           <SavingAccount navigation={navigation} AccountNumber={BalanceData['account number']} />
//         </View>
//         <View style={styles.ClosingBalanceView}>
//           <ClosingBalance Balance={BalanceData.net_balance} />
//         </View>
//         <View style={{ flex: 1, padding: 10 }}>
//           <FlatList
//             data={data}
//             renderItem={({ item }) => {
//               const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//               let date = new Date(item.txn_date);
//               let day = date.getDate().toString().padStart(2, '0');
//               let month = months[date.getMonth()];
//               let year = date.getFullYear().toString().slice(-2);
//               return (
//                 <View>
//                   <TouchableOpacity
//                     onPress={() => navigation.navigate('')}
//                     style={[styles.TouchableOpacityBtn, styles.flexDirection]}>
//                     <View
//                       style={[
//                         styles.flexDirection,
//                         { justifyContent: 'flex-start', gap: 6, width: '60%' },
//                       ]}>
//                       <LinearGradient
//                         start={{ x: 0, y: 0.25 }}
//                         end={{ x: 0, y: 1.0 }}
//                         locations={[0.3, 0]}
//                         colors={['#6e6c6c', '#4c4c4c']}
//                         style={styles.MonthDayContainer}>
//                         <Text style={styles.DayText}>{day}</Text>
//                         <Text style={styles.MonthText}>{`${month} ' ${year}`}</Text>
//                       </LinearGradient>
//                       <View>
//                         <View style={{}}>
//                           <Text style={styles.UPIUserName}>
//                             {item.remark}
//                           </Text>
//                         </View>
//                         <View>
//                           <Text style={styles.refText}>
//                             {`Chq/Ref No.: ${item.cheque_reference ? item.cheque_reference : 'UPI-406434709210'}`}
//                           </Text>
//                         </View>
//                       </View>
//                     </View>
//                     <View>
//                       <Text
//                         style={[
//                           styles.paymentSend,
//                           { color: item.txn_type == 'Cr' ? 'green' : 'red' },
//                         ]}>
//                         {item.txn_type == 'Cr'
//                           ? item.amount ? `${item.amount}` : '1500'
//                           : item.amount ? `-${item.amount}` : '1500'}
//                       </Text>
//                     </View>
//                   </TouchableOpacity>
//                 </View>
//               );
//             }}
//           />
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

// export default AccountActivity;

// const styles = StyleSheet.create({
//   SafeAreaViewContainer: {
//     flex: 1,
//     backgroundColor: '#ffffff57',
//     paddingBottom: 10,
//   },
//   ClosingBalanceView: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//     backgroundColor: '#e7e4e4',
//     position: 'relative',
//     zIndex: 9,
//   },
//   TouchableOpacityBtn: {
//     marginBottom: 5,
//     borderBottomWidth: 1,
//     borderBottomColor: '#c1c1c1',
//     paddingVertical: 6,
//   },
//   flexDirection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   MonthDayContainer: {
//     borderRadius: 4,
//     padding: 3,
//   },
//   DayText: {
//     color: '#ffffff',
//     textAlign: 'center',
//     padding: 3,
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   MonthText: {
//     color: '#ffffff',
//     textAlign: 'center',
//     padding: 3,
//     fontWeight: '600',
//     fontSize: 15,
//   },
//   UPIUserName: {
//     color: '#000000',
//     fontSize: 15,
//     fontWeight: '400',
//   },
//   refText: {
//     fontSize: 13,
//   },
//   paymentSend: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#ff0000',
//     textAlign: 'right',
//   },
// });

import { FlatList, ImageBackground, RefreshControl, SafeAreaView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import SavingAccount from "../savingAccounts/SavingAccount";
import GlobalTheme from "../../../GlobalTheme";
import ClosingBalance from "./ClosingBalance";
import AccountActivityTransList from "./AccountActivityTransList";
import LinearGradient from "react-native-linear-gradient";
import BGDotimg from "../../assets/white-dotted-bg.png";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAccountActivityData, setBalance } from "../../Redux/Slices/AuthSlice";
import AmountComponent from "./AmountComponant";

const AccountActivity = () => {
    const navigation = useNavigation();
    const ActivityData = useSelector((state) => state.Auth.AccountActivityData);
    const BalanceData = useSelector((state) => state.Auth.balance);
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const userId = useSelector((state) => state.Auth.user.id);
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ActivityData) {
            let sortedData = [...ActivityData].sort((a, b) => new Date(b.txn_date) - new Date(a.txn_date));
            setData(sortedData);
        }
    }, [ActivityData]);

    const onRefresh = () => {
        setRefreshing(true);
        getData1();
    };

    const getData1 = async () => {
        setIsVisible(true);
        const header = {
            "content-Type": "application/json",
        };
        const body = { userId: userId };
        try {
            let response = await axios.post(`https://kbank.digital-krishna.in/api/TransactionDetails`, body, {
                headers: header,
            });
            if (response.status == 200 || response.status == 201) {
                // setClientData(response.data)
                console.log("ressdd", response.data, "pppp");
                dispatch(setBalance(response.data));
                dispatch(setAccountActivityData(response.data.data));
                setRefreshing(false);
                setIsVisible(false);
            } else {
                setIsVisible(false);
                setRefreshing(false);
                console.log("error in else part");
            }
        } catch (error) {
            setIsVisible(false);
            setRefreshing(false);
            console.log(error, "error");
            if (error.response && error.response.data && error.response.data.errors) {
                const errors = error.response.data.errors;
                errors.forEach((errorMessage) => {
                    ToastAndroid.showWithGravity(errorMessage, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                });
            } else {
                // If the error structure is unexpected, display a generic error message
                ToastAndroid.showWithGravity("An error occurred", ToastAndroid.SHORT, ToastAndroid.BOTTOM);
            }
        }
    };
    const filterTransactions = (filterType, startDate, endDate) => {
        // Logic to filter transactions based on the selected filter type
        switch (filterType) {
            case "Last 10 Trans.":
                // Filter logic for last 10 transactions
                setData(ActivityData.slice(0, 10)); // Assuming ActivityData contains all transactions
                break;
            case "View last week":
                // Filter logic for transactions from the last week
                const lastWeek = new Date();
                lastWeek.setDate(lastWeek.getDate() - 7);
                setData(ActivityData.filter(transaction => new Date(transaction.txn_date) >= lastWeek));
                break;
            case "View last month":
                // Filter logic for transactions from the last month
                const lastMonth = new Date();
                lastMonth.setMonth(lastMonth.getMonth() - 1);
                setData(ActivityData.filter(transaction => new Date(transaction.txn_date) >= lastMonth));
                break;
            case "Custom Dates":
                // Custom filter logic based on user-defined dates
                if (startDate && endDate) {
                    const customStartDate = new Date(startDate);
                    const customEndDate = new Date(endDate);
                    setData(ActivityData.filter(transaction => {
                        const transactionDate = new Date(transaction.txn_date);
                        return transactionDate >= customStartDate && transactionDate <= customEndDate;
                    }));
                } else {
                    // Handle case where custom dates are not provided
                    // You can show a message or handle it according to your application logic
                }
                break;
            default:
                // Default case: no filtering
                setData(ActivityData);
                break;
        }
    };
    
    
    const renderItem = ({ item }) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let date = new Date(item.txn_date);
        let day = date.getDate().toString().padStart(2, "0");
        let month = months[date.getMonth()];
        let year = date.getFullYear().toString().slice(-2);
        return (
            <View>
                <View style={[styles.TouchableOpacityBtn, styles.flexDirection, {paddingHorizontal:10}]}>
                    <View style={[styles.flexDirection, { justifyContent: "flex-start", gap: 6, width: "60%" }]}>
                        <LinearGradient start={{ x: 0, y: 0.25 }} end={{ x: 0, y: 1.0 }} locations={[0.3, 0]} colors={["#6e6c6c", "#4c4c4c"]} style={styles.MonthDayContainer}>
                            <Text style={styles.DayText}>{day}</Text>
                            <Text style={styles.MonthText}>{`${month} '${year}`}</Text>
                        </LinearGradient>
                        <View>
                            <View style={{}}>
                                <Text style={styles.UPIUserName}>{item.remark}</Text>
                            </View>
                            <View>
                                <Text style={styles.refText}>{`Chq/Ref No.: ${item.cheque_reference ? item.cheque_reference : "UPI-406434709210"}`}</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.paymentSend, { color: item.txn_type == "Cr" ? "#23527c" : "red" }]}>
                          {item.txn_type == "Cr" ? (item.amount ? <AmountComponent amount={item.amount} color={"#23527c"}/>: "1500") : item.amount ?   <AmountComponent amount={item.amount} color={"red"}/> : "1500"}
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <ImageBackground source={BGDotimg} resizeMode="cover" style={{ flex: 1 }}>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
                <View style={{ marginBottom: 15 }}>
                    <SavingAccount navigation={navigation} AccountNumber={BalanceData ? BalanceData["account number"] : ""} />
                </View>
                <View style={styles.ClosingBalanceView}>
                    <ClosingBalance Balance={BalanceData.net_balance} filterTransactions={filterTransactions} />
                </View>
                <FlatList data={data} showsVerticalScrollIndicator={false} renderItem={renderItem} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} />
            </SafeAreaView>
        </ImageBackground>
    );
};

export default AccountActivity;

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1,
        backgroundColor: "#ffffff57",
        paddingBottom: 10,
    },
    ClosingBalanceView: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: "#e7e4e4",
        position: "relative",
        zIndex: 9,
    },
    TouchableOpacityBtn: {
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#c1c1c1",
        paddingVertical: 6,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    MonthDayContainer: {
        borderRadius: 4,
        padding: 3,
    },
    DayText: {
        color: "#ffffff",
        textAlign: "center",
        padding: 3,
        fontWeight: "600",
        fontSize: 14,
    },
    MonthText: {
        color: "#ffffff",
        textAlign: "center",
        padding: 2,
        fontWeight: "600",
        fontSize: 14,
    },
    UPIUserName: {
        color: "#000000",
        fontSize: 15,
        fontWeight: "400",
    },
    refText: {
        fontSize: 13,
    },
    paymentSend: {
        fontSize: 16,
        fontWeight: "700",
        color: "#ff0000",
        textAlign: "right",
    },
});
