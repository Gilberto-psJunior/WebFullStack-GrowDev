import { Router } from "express";
import { UserController } from "../controllers/user.controllers";
import { CreateUserMiddleware } from "../middleware/user/create-user.middleware";

export class UserRoutes {
  public static execute(): Router {
    const router = Router();

    router.post("/", [CreateUserMiddleware.validate], UserController.create);
    router.get("/", UserController.list);
    router.get("/:userId", UserController.get);
    router.put("/:userId", UserController.update);
    router.delete("/:userId", UserController.delete);
    return router;
  }
}
