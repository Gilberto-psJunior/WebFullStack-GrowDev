import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth/auth.middleware";
import { TweetController } from "../controllers/tweets.controller";
import { TweetMiddleware } from "../middleware/tweets/tweets.middleware";

export class TweetRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      "/",
      [AuthMiddleware.validate],
      [TweetMiddleware.validate],
      TweetController.create
    );
    router.get("/", [AuthMiddleware.validate], TweetController.list);
    router.put("/:tweetId", [AuthMiddleware.validate], TweetController.update);
    router.delete(
      "/:tweetId",
      [AuthMiddleware.validate],
      TweetController.delete
    );

    return router;
  }
}
