import {Response, Request, NextFunction} from 'express'

const isValidEmail = new RegExp('[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}')
// TODO quita el any
export const isValidRegister = (req:Request, res:Response, next:NextFunction):any =>{
    const email = req.body.user.email

    if(email!=isValidEmail) throw new Error('Email no valid')
    
}