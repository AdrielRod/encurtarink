import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';
import { AreaPressable, Container, ContainerInput, Logo } from './LoginStyles';
import { Title } from '../../components/interface';
import { FloatingInput } from '../../components/animations';


export default function Login() {
    // const [name, setName] = useState<string>('')
    // const [password, setPassword] = useState<string>('')
    // const [email, setEmail] = useState<string>('')

    // const { signIn } = useContext(AuthContext)

    // async function handleLogin() {
    //     await signIn(email, password)
    // }


    return (
        <AreaPressable onPress={() => Keyboard.dismiss()}>
            <Container>
                <Logo source={require('../../assets/images/logoBig.png')} />
                <ContainerInput>
                    <Title text='Login' type='BLACK' containerStyles={{ margin: 5 }} />
                    <FloatingInput placeholder='Email' />
                    <FloatingInput placeholder='Senha' />
                </ContainerInput>
            </Container>
        </AreaPressable>
    );
}
