import styled from "styled-components/native"
import { Animated, TextStyle } from "react-native"


type AnimatedStyle = {
    isActived: boolean;
}

export const Container = styled.View`
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const Text = styled(Animated.Text)<AnimatedStyle>`
  color: ${({ theme, isActived }) => isActived ? theme.COLORS.BLUE : theme.COLORS.GRAY_PRIMARY };
  background-color: ${({theme}) => theme.COLORS.WHITE};
  width: 60px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.ROBOTO_REGULAR};
  font-size: 18px;
  text-align: center;
  top: 40px;
  left: 15px;
  z-index: 1;
`;

export const Input = styled.TextInput<AnimatedStyle>`
  width: 95%;
  height: 50px;
  border: 1px solid ${({theme, isActived}) => isActived ? theme.COLORS.BLUE : theme.COLORS.GRAY_SECONDARY };
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  font-size: 18px;
`;