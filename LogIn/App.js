import { useEffect, useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Screens
import LogIn from './screens/logIn'
import Perfil from './screens/Perfil'
import DashboardsGen from './screens/DashboardsGen'
import DashboardsInd from './screens/DashboardsInd'
import TiempoReal from './screens/TiempoReal';
import PerfilInfo from './screens/PerfilInfo';
//

const DashboardsGenStack = createNativeStackNavigator()
const DashboardsGenScreen = ({styles}) => {
  return (
    <DashboardsGenStack.Navigator>
      <DashboardsGenStack.Screen name="DashboardsGen">
        {() => <DashboardsGen styles={styles} />}
      </DashboardsGenStack.Screen>

      <DashboardsGenStack.Screen name="PerfilInfo">
        {() => <PerfilInfo styles={styles} />}
      </DashboardsGenStack.Screen>

    </DashboardsGenStack.Navigator>
  );
};

const TiempoRealStack = createNativeStackNavigator()
const TiempoRealScreen = ({styles}) => {
  return (
    <TiempoRealStack.Navigator>
      <TiempoRealStack.Screen name="TiempoReal">
        {() => <TiempoReal styles={styles} />}
      </TiempoRealStack.Screen>
    </TiempoRealStack.Navigator>
  )
}

const DashboardsIndStack = createNativeStackNavigator()
const DashboardsIndScreen = ({styles}) => {
  return (
    <DashboardsIndStack.Navigator>
      <DashboardsIndStack.Screen name="DashboardsInd">
        {() => <DashboardsInd styles={styles} />}
      </DashboardsIndStack.Screen>
    </DashboardsIndStack.Navigator>
  )
}

const ProfileStack = createNativeStackNavigator()
const ProfileStackScreen = ({styles}) => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile">
        {() => <Perfil styles={styles} />}
      </ProfileStack.Screen>
    </ProfileStack.Navigator>
  )
}

SplashScreen.preventAutoHideAsync()

const Tab = createBottomTabNavigator()
const MyTabs = ({styles}) => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="DashboardsGenTab"
        children={() => <DashboardsGenScreen styles={styles} />}
        options={{ title: 'DashboardsGen',
        tabBarIcon: () => (
          <Ionicons name='albums-outline' size={24}></Ionicons>
        ) }}
      />
      <Tab.Screen
        name="DashboardsIndTab"
        children={() => <DashboardsIndScreen styles={styles} />}
        options={{ title: 'DashboardsInd',
        tabBarIcon: () => (
          <Ionicons name='reader-outline' size={24}></Ionicons>
        ) }}
      />
      <Tab.Screen
        name="ProfileTab"
        children={() => <ProfileStackScreen styles={styles} />}
        options={{ title: 'Perfil',
        tabBarIcon: () => (
          <Ionicons name='person-outline' size={24}></Ionicons>
        ) }}
      />
      <Tab.Screen
        name="TiempoRealTab"
        children={() => <TiempoRealScreen styles={styles} />}
        options={{ title: 'TiempoReal',
        tabBarIcon: () => (
          <Ionicons name='hourglass-outline' size={24}></Ionicons>
        ) }}
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
            <MyTabs styles={styles} />
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
  inputLogIn: {
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
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1359BF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tiempoRealContainer: {
    flex: 1,
    backgroundColor: '#1B263B',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dashboardsGenContainer: {
    flex: 1,
    backgroundColor: '#2D6A4F',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dashboardsIndContainer: {
    flex: 1,
    backgroundColor: '#5F0F40',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  perfilContainer: {
    flex: 1,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
