import { NextFunction, Request, Response } from "express";

export class TweetMiddleware {
  public static validate(req: Request, res: Response, next: NextFunction) {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({
        ok: false,
        message: "O tweet deve ter um conteúdo.",
      });
    }
    return next();
  }
}
