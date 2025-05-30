import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LogIn from './screens/logIn'
import Perfil from './screens/Perfil'
import DashboardsGen from './screens/DashboardsGen'
import DashboardsInd from './screens/DashboardsInd'

const DashboardsGenStack = createNativeStackNavigator()
const DashboardsGenScreen = () => {
  return (
    <DashboardsGenStack.Navigator>
      <DashboardsGenStack.Screen name="DashboardsGen" component={DashboardsGen} />
    </DashboardsGenStack.Navigator>
  );
};

const DashboardsIndStack = createNativeStackNavigator()
const DashboardsIndScreen = () => {
  return (
    <DashboardsIndStack.Navigator>
      <DashboardsIndStack.Screen name="DashboardsInd" component={DashboardsInd} />
    </DashboardsIndStack.Navigator>
  );
};

const ProfileStack = createNativeStackNavigator()
const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Perfil} />
    </ProfileStack.Navigator>
  );
};

SplashScreen.preventAutoHideAsync()

const Tab = createBottomTabNavigator()
const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="DashboardsGenTab"
        component={DashboardsGenScreen}
        options={{ title: 'DashboardsGen' }}
      />
      <Tab.Screen
        name="DashboardsIndTab"
        component={DashboardsIndScreen}
        options={{ title: 'DashboardsInd' }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{ title: 'Perfil' }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          ...Entypo.font,
          ...MaterialIcons.font,
          ...FontAwesome.font,
        });
        await new Promise(resolve => setTimeout(resolve, 1000))
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
        await SplashScreen.hideAsync()
      }
    }
    prepare()
  }, []);

  if (!appIsReady) {
    return null
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
          {!isLoggedIn ? (
            <LogIn setIsLoggedIn={setIsLoggedIn}
              styles={styles}
            />
          ) : (
            <MyTabs />
          )}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    marginBottom: 100,
    width: '45%',
    height: '20%',
    borderRadius: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#1359BF',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    width: '90%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#29426B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#3C49D2',
    fontSize: 13,
  },
});
