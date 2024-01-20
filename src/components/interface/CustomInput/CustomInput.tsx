import React, { useState } from 'react';
import { View, TextInput, Animated, TextStyle } from 'react-native';
import { Container, Text, Input } from './CustomInputStyles';

interface ICustomInput {
    type: 'COMMOM' | 'PASSWORD' | 'CREATELINK'
    placeholder: string;
    isFocused: boolean;
    handleFocus: () => void;
    handleBlur: () => void;
}
export default function CustomInput({ type, placeholder, isFocused, handleFocus, handleBlur }: ICustomInput) {

    const [inputValue, setInputValue] = useState('');

    if (type == 'COMMOM') {
        return (
            <Container>
                <Input
                    value={inputValue}
                    onChangeText={setInputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    isActived={isFocused}
                    placeholder={isFocused ? '' : placeholder}
                />
            </Container>
        )
    } else if (type == 'PASSWORD') {
        return (
            <Container>
                <Input
                    value={inputValue}
                    onChangeText={setInputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    isActived={isFocused}
                    placeholder={isFocused ? '' : placeholder}
                />
            </Container>
        )
    } else {
        <Container>
            <Input
                value={inputValue}
                onChangeText={setInputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isActived={isFocused}
                placeholder={isFocused ? '' : placeholder}
            />
        </Container>
    }


};
