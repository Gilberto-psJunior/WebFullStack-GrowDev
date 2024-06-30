import { Router } from "express";
import { LoginMiddleware } from "../middleware/auth/signin.middleware";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();

    router.post("/login", [LoginMiddleware.validate],AuthController.login);
    router.post("/logout",AuthController.logout);

    return router;
  }
}
