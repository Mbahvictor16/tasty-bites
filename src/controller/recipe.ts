import { RequestHandler, NextFunction, Request, Response } from "express";
import RecipeSchema from "../model/model";
import { ManyRecipe, Recipe, SearchRecipe } from "../types";

const indexRoute: RequestHandler = async (req, res, next) => {
  try {
    const findAllRecipe = await RecipeSchema.find();
    return res.status(200).json({
      response: findAllRecipe.map((recipe) => {
        return {
          name: recipe.name,
          ingredients: recipe.ingredients,
          description: recipe.description,
        };
      }),
    });
  } catch (err) {
    next(err);
  }
};

const findRecipe: RequestHandler = async (req, res, next) => {
  try {
    if (
      ((req.query as SearchRecipe)?.name == "" ||
        (req.query as SearchRecipe)?.name == null) &&
      ((req.query as SearchRecipe)?.ingredients == null ||
        (req.query as SearchRecipe)?.ingredients == "")
    )
      return res.status(200).json({ response: [] });
    const searchRecipe = await RecipeSchema.find();

    let newRecipeArray = [] as Recipe[];

    searchRecipe.forEach((recipe) => {
      if (
        new RegExp(`${recipe.name}`, "i").test(
          `${(req.query as SearchRecipe).name}`
        ) ||
        new RegExp(`${req.query as SearchRecipe}`, "i").test(`${recipe.name}`)
      ) {
        newRecipeArray.push(recipe);
      }
    });
    return res.status(200).json({
      response: newRecipeArray.map((recipe) => {
        return {
          name: recipe.name,
          ingredients: recipe.ingredients,
          description: recipe.description,
        };
      }),
    });
  } catch (error) {
    next(error);
  }
};

const addRecipes: RequestHandler = async (req, res, next) => {
  try {
    const addRecipe = await new RecipeSchema({
      name: (req.body as Recipe).name,
      ingredients: (req.body as Recipe).ingredients,
      description: (req.body as Recipe).description,
    });

    await addRecipe.save();
    return res.status(200).json({
      response: [
        {
          name: addRecipe.name,
          ingredients: addRecipe.ingredients,
          description: addRecipe.description,
        },
      ],
    });
  } catch (error) {
    next(error);
  }
};

const insertRecipes: RequestHandler = async (req, res, next) => {
  try {
    await RecipeSchema.insertMany(req.body as ManyRecipe);
    return res.status(200).json({ response: "Recipes successfully inserted." });
  } catch (error) {
    next(error);
  }
};

const HandleServerError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if ((res.statusCode = 500))
    return res.status(500).json({ response: err.message });

  if (res.statusCode === 404)
    return res.status(404).json({ response: "Not Found" });

  return res.json({ response: [] });
};

export { indexRoute, findRecipe, addRecipes, insertRecipes, HandleServerError };
