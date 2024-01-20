import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import api from './src/api/axios-config';

export default function App() {
  const link = 'https://www.figma.com/file/Cs5B4G09yG5qktniv7Zk3a/EncurtaLink?type=design&node-id=1-315&mode=design&t=C9LikMPO9hz1R6Y3-0'


  async function donwload(){
    const response = await api.post('create/', {
        url: link,
        ttl: 600,
    })
    console.log(response.data.link_url)
  }

  return (
    <View style={styles.container}>
      <Button title='Baixar' onPress={donwload}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
