import React from 'react';
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import Routes from "./src/Routes";

const Stack = createNativeStackNavigator();

export default class App extends React.Component{     
  constructor(props){
    super(props);

    this.state = {
      messages : {
          en : {
            numbers: 'The field "{0}" must be a valid number.',
            email: 'Email tidak valid',
            required: 'Data ini harus diisi',
            date: 'The field "{0}" must be a valid date ({1}).',
            minlength: 'The field "{0}" length must be greater than {1}.',
            maxlength: 'The field "{0}" length must be lower than {1}.',
            equalPassword: 'Passwords are different.',
            hasUpperCase: 'The field "{0}" must contain a upper case.',
            hasLowerCase: 'The field "{0}" must contain a lower case.',
            hasNumber: 'The field "{0}" must contain a number.',
            hasSpecialCharacter: 'The field "{0}" must contain a special character.',
        }
      }
    }
  }

  async componentDidMount(){  
    await AsyncStorage.setItem('@default_users',JSON.stringify([
      {email : 'user1@gmail.com',password : '12345'}      
    ]))

    await AsyncStorage.setItem("@is_auth","0");

    await AsyncStorage.setItem("@key_forgot_password","0");
  }

  render(){
    return (
      <NavigationContainer>
        <React.Suspense fallback={<View><Text>Loading . . .</Text></View>}>      
          <Stack.Navigator 
            screenOptions={{
              headerShown : false
            }}>
            {
              Routes.map((item,index) => 
                <Stack.Screen 
                  name={item.name} 
                  key={index}>
                  {props => <item.component {...props} {...this.props} {...this.state} /> }
                </Stack.Screen>
              )
            }        
          </Stack.Navigator>
        </React.Suspense>   

        <Toast ref={(ref) => Toast.setRef(ref)}/>     
      </NavigationContainer>
    );
  }
}