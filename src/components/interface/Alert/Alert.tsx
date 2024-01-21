import { ViewStyle } from "react-native";
import { Container, Text } from "./AlertStyles"
import {Feather} from '@expo/vector-icons'
import { theme } from "../../../theme/theme";

interface ILabel {
    type: 'info' | 'alert-circle';
    text: string;
    containerStyles?: ViewStyle;
}
export default function Alert({ type, text, containerStyles }: ILabel) {

    return (
        <Container style={{...containerStyles}}>
            <Feather name={type} color={type == 'info' ? theme.COLORS.WHITE : theme.COLORS.RED} size={15}/>
            <Text type={type}>{text}</Text>
        </Container>
    )
}