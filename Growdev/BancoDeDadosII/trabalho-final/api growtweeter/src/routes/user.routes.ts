import { Router } from "express";
import { UserController } from "../controllers/user.controllers";
import { CreateUserMiddleware } from "../middleware/user/create-user.middleware";

export class UserRoutes{
public static execute(): Router{

const router =  Router();

router.post("/",[CreateUserMiddleware.validate],UserController.create);
router.get("/",UserController.list);
router.get("/id",UserController.get);
router.put("/",UserController.update);
router.delete("/",UserController.delete);
return router;
}
}
UserRoutes.execute()
