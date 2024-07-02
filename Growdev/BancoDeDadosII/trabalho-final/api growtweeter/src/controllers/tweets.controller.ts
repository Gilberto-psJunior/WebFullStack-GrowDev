import { Request, Response } from "express";
import { prismaConnection } from "../database/prisma.connection";
import { User } from "@prisma/client";

export class TweetController {
  public static async create(req: Request, res: Response) {
    try {
      const { user, content } = req.body;

      const tweetCreated = await prismaConnection.tweet.create({
        data: {
          userId: (user as User).id,
          content: content,
        },
      });

      return res.status(201).json({
        ok: true,
        message: `Tweet do usuario ${
          (user as User).name
        } cadastrado com sucesso`,
        tweetCreated,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }

  public static async list(req: Request, res: Response) {
    try {
      const { user } = req.body;

      const tweets = await prismaConnection.tweet.findMany({
        orderBy: { createdAt: "desc" },
        where: {
          userId: user.id,
        },
        include: {
          user: true,
        },
      });
      return res.status(200).json({
        ok: true,
        user: user,
        tweets: tweets,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }

  public static async update(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const { content, user } = req.body;

      const tweetBelongsUser = await prismaConnection.tweet.findFirst({
        where: {
          id: tweetId,
          userId: user.id,
        },
        include: {
          user: true,
        },
      });

      if (!tweetBelongsUser) {
        return res.status(400).json({
          ok: false,
          message: "Tweet inválido",
        });
      }

      const tweetUpdate = await prismaConnection.tweet.update({
        where: { id: tweetId },
        data: {
          content: content,
        },
      });

      return res.status(200).json({
        ok: true,
        message: "Tweet atualizado com sucesso",
        tweetUpdate,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }

  public static async delete(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const { user } = req.body;

      const tweetBelongsUser = await prismaConnection.tweet.findFirst({
        where: {
          id: tweetId,
          userId: user.id,
        },
        include: {
          user: true,
        },
      });

      if (!tweetBelongsUser) {
        return res.status(400).json({
          ok: false,
          message: "Tweet inválido",
        });
      }

      const tweetDeleted = await prismaConnection.tweet.delete({
        where: {
          id: tweetId,
          deleted: false,
        },
      });

      return res.status(200).json({
        ok: true,
        message: "Tweet deletado com sucesso",
        tweetDeleted,
      });
    } catch (err) {
      return res.status(500).json({
        ok: false,
        message: `Ocorreu um erro inesperado. Erro: ${(err as Error).name} - ${
          (err as Error).message
        }`,
      });
    }
  }
}
