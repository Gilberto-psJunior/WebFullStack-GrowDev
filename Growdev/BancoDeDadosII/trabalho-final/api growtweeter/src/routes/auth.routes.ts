import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth/auth.middleware";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();

    router.post("/login", [AuthMiddleware.validate],AuthController.signin);
    router.post("/logout", []);

    return router;
  }
}
