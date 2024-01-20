import styled from "styled-components/native"

type TitleStyles = {
    type: 'BLACK' | 'WHITE'
}

export const Container = styled.SafeAreaView`
    flex-direction: row;
    gap: 10px;
    align-items: center;
`

export const Text = styled.Text<TitleStyles>`
    color: ${({theme, type}) => type == 'BLACK' ?  theme.COLORS.BLACK_SECONDARY : theme.COLORS.WHITE};
    font-size: 40px;
    font-family: ${({theme}) => theme.FONT_FAMILY.LALEZAR};
`

export const DividerLine = styled.View<TitleStyles>`
    width: 70px;
    height: 4px;
    border-radius: 4px;
    background-color: ${({theme, type}) => type == 'BLACK' ?  theme.COLORS.BLACK_SECONDARY : theme.COLORS.WHITE};
`


