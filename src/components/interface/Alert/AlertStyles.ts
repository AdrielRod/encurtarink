import styled from "styled-components/native"

type TitleProps = {
    type: 'info' | 'alert-circle'
}

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 10px;
`

export const Text = styled.Text<TitleProps>`
    color: ${({theme, type}) => type == 'info' ?  theme.COLORS.WHITE : theme.COLORS.RED};
    font-size: 12px;
    font-weight: 500;
`
