import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { USER_DB } from '../constants';

export async function signIn(req: Request, res: Response){
    const {email, password} = req.body
    const user = USER_DB.find(item => item.email == email)

    if(!user){
        throw new Error("Não foi possivel encontrar o usuário ou email incorreto.")
    }

    if (user.password !== password) {
        throw new Error("Email ou senha incorretos.");
      }

    const token = sign(
        {
            name: user.name,
            email: user.email,
        },
        process.env.JWT_SECRET,
        {
            subject: user.name,
            expiresIn: '30d'
        }
    )

    return res.json( {
        name: user.name,
        email: user.email,
        token: token,
    })

}