import { Router } from "express";
import { indexRoute, insertRecipes } from "../controller/recipe";
import { recipeRoute } from "../types";

const router = Router();

router.get("/recipe", indexRoute).post("/recipe/insert", insertRecipes);

export default router as recipeRoute;
