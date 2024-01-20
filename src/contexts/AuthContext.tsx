import React, {useState, createContext, ReactNode} from "react";
import { apiLogin } from "../api/axios-config";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (email: string, password: string) => Promise<void>;
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
    const [user, setUser] = useState<UserProps>({
        name: '',
        email: '',
        token: '',
    })
    const [loadingAuth, setLoadingAuth] = useState<boolean>(false)
    const isAuthenticated = !!user.name

    async function signIn(email: string, password: string){
        setLoadingAuth(true)

        try {
            const response = await apiLogin.post('/session', {
                email,
                password
            })
            const {name, token} = response.data
            const data = {
                ...response.data
            }
            
            setUser({
                name, 
                email,
                token
            })

            await AsyncStorage.setItem("@user", JSON.stringify(data))
        } catch (error) {
            console.log("Erro ao acessar: ", error)
        } finally { setLoadingAuth(false) }

    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}