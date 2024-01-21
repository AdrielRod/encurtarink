import { useContext, useState } from "react"
import { Alert, CardLink, CustomInput, Header, Label, Title } from "../../components/interface"
import { Container, WelcomeText } from "./FavoritesStyles"
import { AuthContext } from "../../contexts/AuthContext"
import { AreaPressable } from "../Login/LoginStyles"
import { Keyboard } from "react-native"
import { AnimatedSwipe } from "../../components/animations"

export default function Favorites() {

    const { user } = useContext(AuthContext)
    const [link, setLink] = useState<string>('')

    return (
        <AreaPressable onPress={() => Keyboard.dismiss()}>
            <Container>
                <Header />

                <Title
                    type="WHITE"
                    containerStyles={{ marginLeft: 10, marginTop: 40 }}
                    text="Favoritos"
                />
                <Alert
                    text="Aperte no ícone para navegar para o link encurtado."
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5 }} />
                <Alert
                    text="Arraste para o lado esquerdo para favoritar ou deletar"
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5, marginBottom: 20, }} />
                <AnimatedSwipe onPress={() => { }}>
                    <CardLink linkText="https://www.figma.com/file/Cs5B4G09yG5qktniv7Zk3a/EncurtaLink?node-id=1%3A129&mode=dev" />
                </AnimatedSwipe>

            </Container>
        </AreaPressable>
    )
}
