import { NextFunction, Request, Response } from "express";

export class LoginMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return res.status(400).json({ error: "Email inválido" });
    }

    if (!password || typeof password !== "string") {
      return res.status(400).json({
        ok: false,
        message: "informe uma senha no formato de caracteres correto",
      });
    }

    return next();
  }
}
