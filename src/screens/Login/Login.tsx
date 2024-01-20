import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';
import { Container, ContainerInput, Logo } from './LoginStyles';
import { Title } from '../../components/interface';


export default function Login() {
    // const [name, setName] = useState<string>('')
    // const [password, setPassword] = useState<string>('')
    // const [email, setEmail] = useState<string>('')

    // const { signIn } = useContext(AuthContext)

    // async function handleLogin() {
    //     await signIn(email, password)
    // }


    return (
        <Container>
            <Logo source={require('../../assets/images/logoBig.png')}/>
            <ContainerInput>
                <Title text='Login' type='BLACK' containerStyles={{margin: 15}}/>
            </ContainerInput>
        </Container>
    );
}
