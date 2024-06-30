import { NextFunction, Request,Response } from "express";

export class CreateUserMiddleware {
public static validate(req: Request, res: Response,next:NextFunction) {

    const {name, email, username, password} =req.body;


if (!name || typeof name !== 'string') {
    return res.status(400).json({error: 'Nome é obrigatorio'});
}

if (!email || typeof email !=='string' ||!email.includes('@'))  {
    return res.status(400).json({error: 'Email inválido'});
}

if (!password || typeof password !=='string'||password.length <6) {
    return res.status(400).json({
      ok: false,
      message:
        "A senha deve possuir no minímo 6 caracteres",
    });
  }

  return  next();

}
}