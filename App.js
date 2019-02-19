import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';

import * as firebase from 'firebase';
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});











// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {
//   StyleSheet,
//   View,
//   Text,
//   ImageBackground,
//   Dimensions,
//   LayoutAnimation,
//   UIManager,
//   KeyboardAvoidingView,
// } from 'react-native';
// import { Font } from 'expo';
// import { Input, Button, Avatar, Image } from 'react-native-elements';
// import LoginScreen from './screens/LoginScreen';
// import AppNavigator from './AppNavigator';

// import Icon from 'react-native-vector-icons/FontAwesome';
// import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

// import { createStackNavigator, createAppContainer } from 'react-navigation';

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;



// // Enable LayoutAnimation on Android
// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }

// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   rowSelector: {
//     height: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   selectorContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   selected: {
//     position: 'absolute',
//     borderRadius: 50,
//     height: 0,
//     width: 0,
//     top: -5,
//     borderRightWidth: 70,
//     borderBottomWidth: 70,
//     borderColor: 'white',
//     backgroundColor: 'white',
//   },
//   loginContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginTextButton: {
//     fontSize: 16,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   loginButton: {
//     backgroundColor: 'rgba(232, 147, 142, 1)',
//     borderRadius: 10,
//     height: 50,
//     width: 200,
//   },
//   titleContainer: {
//     height: 220,
//     justifyContent: 'center',
//   },
//   formContainer: {
//     backgroundColor: 'white',
//     width: SCREEN_WIDTH - 30,
//     borderRadius: 10,
//     paddingTop: 32,
//     paddingBottom: 32,
//     alignItems: 'center',
//   },
//   loginText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   bgImage: {
//     flex: 1,
//     top: 0,
//     left: 0,
//     width: SCREEN_WIDTH,
//     height: SCREEN_HEIGHT,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   categoryText: {
//     textAlign: 'center',
//     color: 'white',
//     fontSize: 24,
//     fontFamily: 'light',
//     backgroundColor: 'transparent',
//     opacity: 0.54,
//   },
//   selectedCategoryText: {
//     opacity: 1,
//   },
//   titleText: {
//     color: 'white',
//     fontSize: 30,
//     fontFamily: 'regular',
//   },
//   helpContainer: {
//     height: 64,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });








// import React from 'react'
// import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// // import the different screens
// import Loading from './screens/LoadingScreen'
// import SignUp from './screens/SignUp'
// import Login from './screens/LoginScreen'
// import Main from './screens/DashboardScreen'
// import * as firebase from 'firebase';
//  import { firebaseConfig } from './config';
//  firebase.initializeApp(firebaseConfig);

// // create our app's navigation stack
// export default class App extends React.Component {
//      render() {
//        return <AppNavigator />;
//      }
//    }
  
//    const AppSwitchNavigator = createSwitchNavigator({
//      Loading: Loading,
//      SignUp: SignUp,
//      Login: Login,
//      Main: Main
//    })
  
//    const AppNavigator = createAppContainer(AppSwitchNavigator);
  






// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation'

// import LoginScreen from './screens/LoginScreen';
// import DashboardScreen from './screens/DashboardScreen';
// import LoadingScreen from './screens/LoadingScreen';

// import * as firebase from 'firebase';
// import { firebaseConfig } from './config';
// firebase.initializeApp(firebaseConfig);

// export default class App extends React.Component {
//   render() {
//     return <AppNavigator />;
//   }
// }

// const AppSwitchNavigator = createSwitchNavigator({
//   LoadingScreen: LoadingScreen,
//   LoginScreen: LoginScreen,
//   DashboardScreen: DashboardScreen
// })

// const AppNavigator = createAppContainer(AppSwitchNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
