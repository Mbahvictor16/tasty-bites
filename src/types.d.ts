import { Router } from "express";

type recipeRoute = Router;
type docsRouter = Router;

interface Recipe {
  name: String;
  ingredients: Ingredients[];
  description: String;
}

type ManyRecipe = Recipe[];

type Ingredients = String;

interface SearchRecipe {
  name?: String;
  ingredients?: String;
}

export {
  recipeRoute,
  docsRouter,
  Recipe,
  SearchRecipe,
  Ingredients,
  ManyRecipe,
};
