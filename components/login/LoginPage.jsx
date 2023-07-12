import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from "./login.style";
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/slices/authAction';

const LoginPage = () => {
  const { loading, user, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch();
  //
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  //
  const handleLogin  = async (values) => {
    try {
      await dispatch(userLogin(values));
    } catch (error) {
      
    }
  };
  //
  const handleRegister = () => {
    navigation.navigate('register');
  }
  //
  // useEffect(() => {
  //   console.log(auth);
  // }, [auth]);

  return (
      <View style={styles.container}>
        <View style={styles.container_header}>
              <Text style={styles.header}>Login Form</Text>
        </View>
        <View>
          <TextInput
            value={username}
            placeholder={'Username'}
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            value={password}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.btn_login} onPress={() => handleLogin({username, password})}>
            <Text style={styles.loginText}>LOGIN</Text> 
          </TouchableOpacity>
          <Text style={styles.text} onPress={() => handleRegister()}>Do not have an account? Register now</Text>
        </View>
        {loading && <ActivityIndicator style={styles.loadingIndicator}/>}
      </View>
  );
};

export default LoginPage;