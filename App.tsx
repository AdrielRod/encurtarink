import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthProvider } from './src/contexts/AuthContext';
import Login from './src/screens/Login/Login';

export default function App() {

  // async function donwload(){
  //   const response = await api.post('create/', {
  //       url: link,
  //       ttl: 600,
  //   })
  //   console.log(response.data.link_url)
  // }



  return (
      <AuthProvider>
        <Login/>
      </AuthProvider>

  );
}

