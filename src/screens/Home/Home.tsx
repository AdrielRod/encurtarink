import React, { useCallback, useContext, useState } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { Keyboard } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"

import {
    Container,
    WelcomeText,
} from "./HomeStyles"
import { apiLink } from "../../api/axios-config"
import {
    Alert,
    CardLink,
    CustomInput,
    Header,
    Label,
    Title,
} from "../../components/interface"
import { AuthContext } from "../../contexts/AuthContext"
import { AreaPressable } from "../Login/LoginStyles"
import { AnimatedSwipe } from "../../components/animations"

export default function Home() {

    const { user } = useContext(AuthContext)
    const [link, setLink] = useState<string>('')
    const [allLinks, setAllLinks] = useState<string[]>([])

    useFocusEffect(
        useCallback(() => {
            let isActive = true

            const handleGetLinks = async () => {
                if (!isActive) return

                try {
                    const linksJSON = await AsyncStorage.getItem("@links")
                    const linksArray: string[] = JSON.parse(linksJSON || '[]')
                    setAllLinks(linksArray)
                } catch (error) {
                    console.error(error)
                }
            }

            handleGetLinks()

            return () => {
                isActive = false
            }
        }, [setAllLinks])
    )

    async function addLink() {
        if (!link) return
        try {
            const response = await apiLink.post('create/', {
                url: link,
                ttl: 600,
            })

            const newLink = response.data.link_url
            const updatedLinks = [...allLinks, newLink]

            setAllLinks(updatedLinks)
            await AsyncStorage.setItem('@links', JSON.stringify(updatedLinks))
            setLink('')
        } catch (error) {
            console.error(error)
        }
    }

    function dismissKeyboard() {
        Keyboard.dismiss()
    }

    return (
        <AreaPressable onPress={dismissKeyboard}>
            <Container>
                <Header />
                <WelcomeText>Bem vindo(a), {user?.name}</WelcomeText>
                <Label text='Cole o link abaixo:' type='WHITE' textStyles={{ marginTop: 10, marginLeft: 10 }} />
                <CustomInput
                    placeholder='Link'
                    type='CREATELINK'
                    value={link}
                    setValue={setLink}
                    onPress={addLink}
                />

                <Title
                    type="WHITE"
                    containerStyles={{ marginLeft: 10, marginTop: 10 }}
                    text="Histórico"
                />
                <Alert
                    text="Aperte no ícone para navegar para o link encurtado."
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5 }}
                />
                <Alert
                    text="Arraste para o lado esquerdo para favoritar ou deletar"
                    type="info"
                    containerStyles={{ marginLeft: 10, marginTop: 5, marginBottom: 20 }}
                />

                {allLinks.map((item, index) => (
                    <AnimatedSwipe onPress={() => { }} key={index}>
                        <CardLink linkText={item} />
                    </AnimatedSwipe>
                ))}
            </Container>
        </AreaPressable>
    )
}
