import { ViewStyle } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { BoxContent, ButtonCopyLink, ButtonLink, Container, CopyText, LinkText } from "./CardLinkStyles"
import { ButtonIcon } from "../CustomInput/CustomInputStyles";
import { theme } from "../../../theme/theme";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

interface ICardLink {
    linkText: string;
}

export default function CardLink({linkText}: ICardLink) {


    return (
        <Container>
            <ButtonLink>
                <Ionicons name="link" size={36} color={theme.COLORS.BLUE}/>
            </ButtonLink>
            <BoxContent>
                <LinkText numberOfLines={1}>{linkText}</LinkText>
                <ButtonCopyLink>
                    <CopyText>Copiar Link Encurtado</CopyText>
                </ButtonCopyLink>
            </BoxContent>
        </Container>
    )
}