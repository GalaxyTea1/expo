import React, { useEffect, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from "./register.style";

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCf, setPasswordCf] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
      <View style={styles.container}>
        <View style={styles.container_header}>
              <Text style={styles.header}>Register Form</Text>
        </View>
        <View>
          <TextInput
            value={username}
            placeholder={'Username'}
            style={styles.input}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            value={email}
            placeholder={'Email'}
            style={styles.input}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            value={password}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => setPassword(text)}
          />
          <TextInput
            value={passwordCf}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            style={styles.input}
            onChangeText={text => setPasswordCf(text)}
          />
          <Text style={styles.errorText}>{error}</Text>
          <TouchableOpacity style={styles.btn_register} >
            <Text style={styles.loginText}>Register</Text> 
          </TouchableOpacity>
          <Text style={styles.text}>Login now</Text>
        </View>
        {isLoading && <ActivityIndicator style={styles.loadingIndicator}/>}
      </View>
  );
};

export default Register;