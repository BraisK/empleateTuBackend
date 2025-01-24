import { UserService } from "../services/user.service";
import {Response, Request} from 'express'


export class UserController{
    static async profile(req:Request, res:Response){
        // QUIEN???
        const {email} = req.body.user     
        const user = await UserService.getUserByEmail(email)
        res.status(200).json(user)
        
    }
    static async getAll(req:Request, res:Response){
        try{
        const user = await UserService.getAll()
        res.status(200).json(user)
        } catch(error){
            res.status(409).json({message:'User list error: ',error})
        }
    }
}

/* function login(){

}

function register(){

} */