import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
    const [name, setName] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const { signIn } = useContext(AuthContext)

    async function handleLogin() {
        await signIn(email, password)
    }


    return (

        <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />

                <Button title='Logar' onPress={handleLogin} />
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
    input: {
        width: 150,
        height: 40,
        backgroundColor: '#111111',
        color: '#fff',
        margin: 10,
    }
});
