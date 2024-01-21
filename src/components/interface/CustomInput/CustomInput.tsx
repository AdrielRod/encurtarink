import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons'
import { ButtonIcon, Container, Input } from './CustomInputStyles';
import Label from '../Label/Label';
import { theme } from '../../../theme/theme';

interface ICustomInput {
    type: 'COMMOM' | 'PASSWORD' | 'CREATELINK';
    placeholder: string;
    value: string;
    setValue: (text: string) => void;
}

export default function CustomInput({ type, placeholder, value, setValue }: ICustomInput) {

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false)

    function toggleVisibilityPassword(){
        setPasswordVisible(!passwordVisible)
        if(!isFocused){
            setIsFocused(false)
        }
    }

    if (type == 'COMMOM') {
        return (
            <Container type={type} isActived={isFocused}>
                <Label text={placeholder} type='BLACK' textStyles={{ marginTop: 10, marginLeft: 1 }} />
                <Input
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    isActived={isFocused}
                    placeholder={placeholder}
                    type={type}
                />
            </Container>
        )
    } else if (type == 'PASSWORD') {
        return (
            <Container type={type} isActived={isFocused}>
                <Input
                    value={value}
                    onChangeText={(text) => setValue(text)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    isActived={isFocused}
                    placeholder={placeholder}
                    secureTextEntry={passwordVisible}
                    type={type}
                />
                <ButtonIcon onPress={toggleVisibilityPassword}>
                    <Entypo name={passwordVisible ? 'eye-with-line' : 'eye'} size={30} color={theme.COLORS.GRAY_PRIMARY} />
                </ButtonIcon>
            </Container>
        )
    } else {
        <Container type={type} isActived={isFocused}>
            <Input
                value={value}
                onChangeText={(text) => setValue(text)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                isActived={isFocused}
                placeholder={placeholder}
                type={type}

            />
        </Container>
    }


};
