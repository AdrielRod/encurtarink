import React, {useState, createContext, ReactNode, useEffect} from "react";
import { apiLogin } from "../api/axios-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
    user: UserProps | null;
    isAuthenticated: boolean;
    loadingAuth: boolean;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => void;
}

type UserProps = {
    name: string;
    email: string;
    token: string
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps | null>(null)
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const isAuthenticated = !!user?.name

    useEffect(() => {
        async function getUser(){
            const userInfo = await AsyncStorage.getItem('@user')
            let hasUser: UserProps = JSON.parse(userInfo || '{}')

            if(Object.keys(hasUser).length > 0){
                setUser({
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token
                })
            }
            setLoading(false)
        }

        getUser()
    }, [])

    async function signIn(email: string, password: string){
        setLoadingAuth(true)

        try {
            console.log('Entrou')
            const response = await apiLogin.post('/login', {
                email,
                password
            })

            console.log(response)

            console.log("Passou do response")
            const {name, token} = response.data
            const data = {
                ...response.data
            }
            
            setUser({
                name, 
                email,
                token
            })

            console.log(data)

            await AsyncStorage.setItem("@user", JSON.stringify(data))
        } catch (error) {
            console.log("Erro ao acessar: ", error)
        } finally { setLoadingAuth(false) }

    }

    async function signOut(){
        setUser(null)
        AsyncStorage.removeItem('@user')
    }

    return(
        <AuthContext.Provider value={{user, loadingAuth, isAuthenticated,loading,signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}