import { ViewStyle } from "react-native";
import { Container, DividerLine, Text } from "./TitleStyles"

interface ITitle {
    type: 'BLACK' | 'WHITE';
    text: string;
    containerStyles?: ViewStyle;
}
export default function Title({type, text, containerStyles}: ITitle){

    return(
        <Container style={{...containerStyles}}>
            <Text type={type}>{text}</Text>
            <DividerLine type={type}/>
        </Container>
    )
}