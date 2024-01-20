import React, { useState } from 'react';
import { View, TextInput, Animated, TextStyle } from 'react-native';
import { Container, Text, Input } from './FloatingInputStyles';

interface IFloatingInput {
    placeholder: string;

}
export default function FloatingInput({ placeholder }: IFloatingInput) {

    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const labelAnimation = new Animated.Value(inputValue || isFocused ? 1 : 0);

    function handleFocus(){
        Animated.timing(labelAnimation, {
            toValue: 1,
            duration: 150, 
            useNativeDriver: true, 
        }).start();
        setIsFocused(true);
    };

    function handleBlur(){
        Animated.timing(labelAnimation, {
            toValue: inputValue || isFocused ? 1 : 0,
            duration: 150, 
            useNativeDriver: true, 
        }).start();
        setIsFocused(false);
    };

    const translateY = labelAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -28],
    });

    return (
        <Container>
             {isFocused && (
            <Text isActived={isFocused} style={{ transform: [{ translateY }], pointerEvents: 'none' }}>
                {placeholder}
            </Text>
            )}
            <Input
                value={inputValue}
                onChangeText={setInputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                isActived={isFocused}
                placeholder={isFocused ? '' : placeholder}
            />
        </Container>
    );
};
