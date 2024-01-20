import styled from "styled-components/native"
import { Platform, TouchableWithoutFeedback } from "react-native"

export const AreaPressable = styled(TouchableWithoutFeedback)`

`

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    background-color: ${({ theme }) => theme.COLORS.BLACK_TERTIARY};
    padding-top: ${Platform.OS == 'android' ? '25px' : '0'};
`
export const Logo = styled.Image`
    width: 75%;
    height: 70px;
    margin-bottom: 20%;
`
export const ContainerInput = styled.KeyboardAvoidingView`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-top-right-radius: 32px;
    border-top-left-radius: 32px;
    height: 70%;
    width: 100%;
    padding-left: 15px;

`
