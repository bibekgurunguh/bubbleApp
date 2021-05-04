import React, { useState, useContext, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import ColorPalette from '../constants/ColorPalette';
import { user } from '../types';
import { userContext } from '../contexts/userContext';
import { login, getUser } from '../services/ApiService';
import { Navigation } from '../interfaces';
import { token } from '../config';

const LoginScreen = ({ navigation }: { navigation: Navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    console.log('from useEffect', user);
    if (user.logged) navigation.navigate('MainAppScreen');
  });

  const onLoginHandler = async () => {
    if (email === 'janet.stevans@siliconrhino.io' && password === '12345') {
      setUser({ ...user, logging: true });
      try {
        const userInfo = await getUser(token);
        setUser({
          logged: true,
          logging: false,
          userInfo,
        });
      } catch (err) {
        setUser({
          logged: false,
          logging: false,
          userInfo: undefined,
          token: '',
        });
        setError('Login Failed!');
      }
    } else {
      setError('Login Failed!');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginCard}>
        <View style={styles.bubbleContainer}>
          <Image
            style={styles.bubbleLogo}
            source={require('../assets/images/bubbleLogo.png')}
          />
        </View>
        <TextInput
          style={styles.textField}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        ></TextInput>
        <TextInput
          style={styles.textField}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        ></TextInput>
        {error.length ? <Text style={styles.errorText}>{error}</Text> : <></>}
        {user.logging && <ActivityIndicator size="large" color="green" />}
        <TouchableOpacity
          style={styles.loginButton}
          activeOpacity={0.7}
          onPress={onLoginHandler}
        >
          <Text style={styles.loginText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bubbleContainer: {
    width: 100,
    height: 100,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  bubbleLogo: {
    width: 100,
    height: 100,
  },
  textField: {
    borderBottomColor: ColorPalette.cyberGrape,
    borderBottomWidth: 2,
    width: '70%',
    fontSize: 18,
    margin: 20,
  },
  loginButton: {
    backgroundColor: ColorPalette.keppel,
    width: '70%',
    padding: 10,
    margin: 20,
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    margin: 20,
  },
});
