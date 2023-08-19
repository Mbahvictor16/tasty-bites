import { InferSchemaType, Schema, model } from "mongoose";
import { Recipe } from "../types";

const RecipeSchema = new Schema<Recipe>({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: 255,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 5000,
  },
});

RecipeSchema.pre("save", function () {
  this.name.charAt(0).toUpperCase() + this.name.slice(1).toLowerCase();
  this.ingredients.map((ingredient) => {
    ingredient.toLowerCase();
  });
});

// RecipeSchema.statics.byName = function (
//   foodName: String
// ): Promise<Recipe[] | []> {
//   return this.where({
//     name: new RegExp(`${this.name}`, "i").test(`${foodName}`),
//   });
// };

export default model<InferSchemaType<typeof RecipeSchema>>(
  "RecipeSchema",
  RecipeSchema
);
