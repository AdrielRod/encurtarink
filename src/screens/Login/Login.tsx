import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Alert, Button, Image, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';
import { AreaPressable, ButtonLogin, Container, ContainerInput, Logo } from './LoginStyles';
import { CustomInput, Label } from '../../components/interface';
import { theme } from '../../theme/theme';



export default function Login() {
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const { signIn, loadingAuth } = useContext(AuthContext)

    async function handleLogin() {
        if(email && password){
            signIn(email, password)
            return
        }
        Alert.alert("Preencha todos os campos corretamente.")
    }



    return (
        <AreaPressable onPress={() => Keyboard.dismiss()}>
            <Container>
                <Logo source={require('../../assets/images/logoBig.png')} />
                <ContainerInput>
                    <CustomInput
                        placeholder='Email'
                        type='COMMOM'
                        value={email}
                        setValue={(text) => setEmail(text)}
                    />

                    <Label text='Senha' type='BLACK' textStyles={{ marginTop: 10, marginLeft: 1 }} />
                    <CustomInput
                        placeholder='Senha'
                        type='PASSWORD'
                        value={password}
                        setValue={(text) => setPassword(text)}
                    />

                    <ButtonLogin onPress={handleLogin} disabled={loadingAuth}>
                        {loadingAuth ? <ActivityIndicator size={30} color={theme.COLORS.WHITE}/> : <Label text='Entrar' type='WHITE' />}
                    </ButtonLogin>
                </ContainerInput>
            </Container>
        </AreaPressable>
    );
}
