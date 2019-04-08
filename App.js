import React from 'react';
import {StyleSheet, Text, View,Image,ImageBackground} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Input} from './components/input';
import {Button} from './components/button';

export default class App extends React.Component {

  state = {
    email: '',
    password: '',
    authenticating: false,
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

class register extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'white'
    }
  }

  render() {
    return (
      <ImageBackground source={require('./background.jpg')} style={styles.container}>
        <Image style={styles.image} source={require('./logo.gif')} />
        <Input
          placeholder = 'Enter name'
          label = 'Name'
        />
        <Input
          placeholder = 'Enter email'
          label = 'Email'
        />

        <Input
          placeholder = 'Enter password'
          label = 'Password'
          secureTextEntry
        />

        <Button
          title = 'Register'
          onPress = { () => this.props.navigation.navigate('Home')}
        >Register</Button>

        <Text style={styles.text2}> Already have an account. <Text 
          title = 'Login'
          onPress = { () => this.props.navigation.navigate('Home')}
        >LOGIN</Text> </Text>
        
      </ImageBackground>
    );
  }
}

class login extends React.Component {


  render() {

    return (
      <ImageBackground source={require('./background.jpg')} style={styles.container}>
        <Image style={styles.image} source={require('./logo.gif')} />
        <Input
          placeholder = 'Enter email'
          label = 'Email'
        />

        <Input
          placeholder = 'Enter password'
          label = 'Password'
          secureTextEntry
        />

        <Button
          title = 'Login'
          onPress = { () => this.props.navigation.navigate('Homepage')}
        >Login</Button>

        <Text style={styles.text2}> Don't have an account yet? <Text 
          title = 'Register'
          onPress = { () => this.props.navigation.navigate('Register')}
        >REGISTER</Text> </Text>
        
      </ImageBackground>
    );
  }
}

class homepage extends React.Component {


  render() {

    return (
      <View >
        
        <Text style={styles.text}>Homepage </Text>
       <Image style={styles.image} source={require('./image1.jpg')} />
       <Image style={styles.image} source={require('./image1.jpg')} />
       
       
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: login,
  Register: register,
  Homepage:homepage
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'white'
    }
  }
});

const AppContainer =  createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    padding:20,
    justifyContent: 'center',

   
  },

    text:{
      alignItems: 'center',
      fontSize: 20,
      color: 'black',

    },

    image:{
      alignItems: 'center',
      width:'100%',
      resizeMode:'contain',
    },

    text2:{
      alignItems: 'center',
      fontSize: 15,
      color: 'black',

    },

    logo:{
      alignItems: 'center',
      width:'100%',
      height:'50%',
      resizeMode:'center',
    },
    

    
});