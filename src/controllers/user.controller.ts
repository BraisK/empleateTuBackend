import { UserService } from "../services/user.service";
import {Response, Request} from 'express'


export class UserController{
    static async profile(req:Request, res:Response){
        // QUIEN???
        const {email} = req.body.user     
        const user = await UserService.getUserByEmail(email)
        res.status(200).json(user)
        
    }
}

/* function login(){

}

function register(){

} */