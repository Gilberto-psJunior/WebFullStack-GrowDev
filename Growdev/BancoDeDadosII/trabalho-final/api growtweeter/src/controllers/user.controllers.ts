import { error } from "console";
import { Request,Response } from "express";
import { prismaConnection } from "../database/prisma.connection";

export class UserController{
    public static async create(req: Request,res:Response){
        try {
       const {name, email, username, password} = req.body;

       await prismaConnection.user.create({
        data: {
            name,
            email,
            username,
            password
        }
       })
        return res.status(201).json({
            ok: true,
            message: "usuario criado com sucesso"
        });
        
        } catch(err){
            return res.status(500).json({
                ok : false,
                message:`ocorreu um erro inesperado.${(err as Error).name}- ${(err as Error).message}`
            });

        }

    };

    public static list(req: Request,res:Response){
        try {


        } catch(err){
            return res.status(500).json({
                ok : false,
                message:`ocorreu um erro inesperado.${(err as Error).name}- ${(err as Error).message}`
            })

        }
    }

    public static get(req: Request,res:Response){
        try {


        } catch(err){
            return res.status(500).json({
                ok : false,
                message:`ocorreu um erro inesperado.${(err as Error).name}- ${(err as Error).message}`
            })

        }
    }

    public static update(req: Request,res:Response){
        try {


        } catch(err){
            return res.status(500).json({
                ok : false,
                message:`ocorreu um erro inesperado.${(err as Error).name}- ${(err as Error).message}`
            })

        }
    }

    public static delete(req: Request,res:Response){
        try {


        } catch(err){
            return res.status(500).json({
                ok : false,
                message:`ocorreu um erro inesperado.${(err as Error).name}- ${(err as Error).message}`
            })

        }
    }


}