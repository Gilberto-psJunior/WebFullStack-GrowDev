import { Request, Response } from "express";
import { prismaConnection } from "../database/prisma.connection";
import { User } from "@prisma/client";

export class LikeController {
  public static async createLike(req: Request, res: Response) {
    try {
      const { tweetId } = req.params;
      const { user } = req.body;

      const tweetFound = await prismaConnection.tweet.findFirst({
        where: { id: tweetId },
      });

      if (!tweetFound) {
        return res.status(400).json({
          ok: false,
          message: "Tweet não encontrado",
        });
      }

      //verifica se user já curtiu o tweet
      const userliked = await prismaConnection.like.count({
        where: {
          tweetId: tweetId,
          userId: user.id,
        },
      });

      //conta quantos likes o tweet tem
      const countLiked = await prismaConnection.like.count({
        where: {
          tweetId: tweetId,
        },
      });

      if (userliked) {
        const tweetLiked = await prismaConnection.like.delete({
          where: {
            tweetId: tweetId,
            userId: user.id,
          },
        });

        return res.status(201).json({
          ok: true,
          message: "Like removido com sucesso",
          tweetLiked,
          totalLikes: countLiked - 1,
        });
      } else {
        const tweetLiked = await prismaConnection.like.create({
          data: {
            tweetId: tweetId,
            userId: user.id,
          },
        });

        return res.status(201).json({
          ok: true,
          message: "Like concluido com sucesso",
          tweetLiked,
          totalLikes: countLiked + 1,
        });
      }
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
