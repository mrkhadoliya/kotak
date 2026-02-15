import { StyleSheet, Easing, Pressable, ToastAndroid, ActivityIndicator,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entypo from 'react-native-vector-icons/Entypo'
import Splash from '../splash/Splash';
import LoggIn from '../screencomponents/loggedin/LoggIn';
// import BottomTabNavigator from './src/NavigatorBottomNav/BottomTabNavigator';
import AccountOverview from '../screencomponents/accountoverview/AccountOverview';
import AccountActivity from '../screencomponents/accountcctivitys/AccountActivity';
import Profile from './drawerbar/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigate from './DrawerNavigate';
import Login from '../screencomponents/loggedin/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { loginSuccess, setLoginTime } from '../Redux/Slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();
  
const MainNavigation = (props) => {
  const isAuthenticated = useSelector((state) => state.Auth.isAuthenticated);
  const fromLoginScreen = useSelector((state) => state.Auth.FromLoginScreen);
  const { navigation } = props;
  const [identifyToken,setIdentifyToken] = useState('')
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch()

  console.log(isAuthenticated,'oooo')

  const getStoredAuthToken = async () => {
    try {
        const token = await AsyncStorage.getItem('identify');
        if (token === null) {
            return null;
        }
       setIdentifyToken(token)
        // return token;
    } catch (error) {
        console.log('Error retrieving token from storage:', error);
  
        return null;
    }
  };


  const checkAuth = async () => {
    setLoading(true);
    // setgetstared(true)
    const authToken = await getStoredAuthToken();
      if(authToken){
        const header = {
          'content-Type': "application/json",
      };
      const body = {token:authToken};
      try {
        let response = await axios.post(
          `https://kbank.digital-krishna.in/api/user_information`,
          body,
          {
            headers: header,
          },
        );
        
        if (response.status == 200 || response.status == 201) {
            dispatch(loginSuccess(response.data.data))
            setLoading(false)
          } else {
            console.log("error")
            setLoading(false)
          }
      }
      catch (err) {
        console.log(err,'error')
        setLoading(false)
      } 
      
      }
    }


 useEffect(() => {
    //  getStoredAuthToken()
        const fetchData =async()=>{
            await checkAuth();
            setLoading(false)
        }
       fetchData()
    }, [isAuthenticated,fromLoginScreen])

if (loading) {
  return (
      <View style={{ flex: 1,}}>
          {/* <ActivityIndicator size="large" color="#0000ff" /> */}
          <Splash loading={loading}/>
      </View>
  )
}



   if(!isAuthenticated){
    return (
      <NavigationContainer> 
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{  
              headerShown: false,
              headerStyle: { backgroundColor: "#ff0000" },
              headerTintColor: "#fff",
              headerBackTitleVisible: false,
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: { fontSize: 15 },
          }}
        >
          {/* <Stack.Screen name='splash' options={{headerShown:false}}>
              {(props)=><Splash {...props} />}
          </Stack.Screen>   */}
          {/* <Stack.Screen name='logged in' options={{headerShown:false}}>
              {(props)=><LoggIn {...props} />}
          </Stack.Screen>   */}
          <Stack.Screen name='login' options={{headerShown:false}}>
              {(props)=><Login {...props} />}
          </Stack.Screen>  
  
          {/* <Stack.Screen name="homes" options={{ headerShown: false }}>
              {(props) => <DrawerNavigate {...props} />}
          </Stack.Screen>
  
          <Stack.Screen name="account overview"
          options={({ navigation }) => ({
            headerShown: true,
            title:'Account Overview',
            headerTitleAlign:'left', 
            headerStyle:{
              backgroundColor:'#ff0000'
            },
            headerTitleStyle:{
              color:'#fff'
            },
            headerRight: () => (
              <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                  <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" /> 
              </Pressable>
            ),
          })}>
              {(props) => <AccountOverview {...props} />}
          </Stack.Screen>
  
          <Stack.Screen name="account activity"
          options={({ navigation }) => ({
            headerShown: true,
            title:'Account Activity',
            headerTitleAlign:'left', 
            headerStyle:{
              backgroundColor:'#ff0000'
            },
            headerTitleStyle:{
              color:'#fff'
            },
            headerRight: () => (
              <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                  <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" /> 
              </Pressable>
            ),
          })}>
              {(props) => <AccountActivity {...props} />}
          </Stack.Screen>
  
          <Stack.Screen name="profile"
            options={({ navigation }) => ({
              headerShown: true,
              title:'Account Activity',
              headerTitleAlign:'left', 
              headerStyle:{
                backgroundColor:'#ff0000'
              },
              headerTitleStyle:{
                color:'#fff'
              },
              headerRight: () => (
                <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                    <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" /> 
                </Pressable>
              ),
            })}>
              {(props) => <Profile {...props} />}
          </Stack.Screen>
       */}
         </Stack.Navigator>
      </NavigationContainer>
    )
   }else{
    return (
        <NavigationContainer> 
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{  
                headerShown: false,
                headerStyle: { backgroundColor: "#ff0000" },
                headerTintColor: "#fff",
                headerBackTitleVisible: false,
                headerTitleAlign: "center",
                headerShadowVisible: false,
                headerTitleStyle: { fontSize: 15 },
            }}
          >
            {/* <Stack.Screen name='splash' options={{headerShown:false}}>
                {(props)=><Splash {...props} />}
            </Stack.Screen>  
            <Stack.Screen name='logged in' options={{headerShown:false}}>
                {(props)=><LoggIn {...props} />}
            </Stack.Screen>  
            <Stack.Screen name='login' options={{headerShown:false}}>
                {(props)=><Login {...props} />}
            </Stack.Screen>   */}
           {fromLoginScreen == "" && <Stack.Screen name='logged in' options={{headerShown:false}}>
              {(props)=><LoggIn {...props} />}
          </Stack.Screen> }
    
            <Stack.Screen name="homes" options={{ headerShown: false }}>
                {(props) => <DrawerNavigate {...props} />}
            </Stack.Screen>
    
            <Stack.Screen name="account overview"
            options={({ navigation }) => ({
              headerShown: true,
              title:'Account Overview',
              headerTitleAlign:'left', 
              headerStyle:{
                backgroundColor:'#ff0000'
              },
              headerTitleStyle: {
                color: '#fff',
                fontSize:17,
              },
              headerLeft: () => (
                <View>
                   <Pressable style={[styles.cartIcons, {left:-10}]} onPress={() => navigation.goBack()}> 
                     <Entypo name="chevron-thin-left" style={{ fontSize: 30 }} color="#fff" />
                   </Pressable>
                 </View>
             ),
              headerRight: () => (
                <Pressable style={styles.cartIcons} >
                  <Entypo name="dots-three-vertical" style={{ fontSize: 20 }} color="#fff" />
                </Pressable>
              ),
            })}>
                {(props) => <AccountOverview {...props} />}
            </Stack.Screen>
    
            <Stack.Screen name="account activity"
            options={({ navigation }) => ({
              headerShown: true,
              title:'Account Activity',
              headerTitleAlign:'left', 
              headerStyle:{
                backgroundColor:'#ff0000'
              },
              headerTitleStyle: {
                color: '#fff',
                fontSize:17,
              },
              headerLeft: () => (
                <View>
                   <Pressable style={[styles.cartIcons, {left:-10}]} onPress={() => navigation.goBack()}> 
                     <Entypo name="chevron-thin-left" style={{ fontSize: 30 }} color="#fff" />
                   </Pressable>
                 </View>
             ),
              headerRight: () => (
                <Pressable style={styles.cartIcons} >
                  <Entypo name="dots-three-vertical" style={{ fontSize: 20 }} color="#fff" />
                </Pressable>
              ),
            })}>
                {(props) => <AccountActivity {...props} />}
            </Stack.Screen>
    
            <Stack.Screen name="profile"
              options={({ navigation }) => ({
                headerShown: true,
                title:'Account Activity',
                headerTitleAlign:'left', 
                headerStyle:{
                  backgroundColor:'#ff0000'
                },
                headerTitleStyle:{
                  color:'#fff'
                },
                headerRight: () => (
                  <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("")}>
                      <Entypo name="dots-three-vertical" style={{ fontSize: 25 }} color="#fff" /> 
                  </Pressable>
                ),
              })}>
                {(props) => <Profile {...props} />}
            </Stack.Screen>
        
           </Stack.Navigator>
        </NavigationContainer>
      
    )
   }
}

export default MainNavigation

const styles = StyleSheet.create({
  ViewContainer :{ 
    flex:1
  },
  cartIcons: {
    right: -5
  }
})


