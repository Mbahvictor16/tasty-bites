# Tasty Bites API

The tasty bites API is a recipe API that provides access to recipes and
cuisines.

## /recipe

**HTTP GET**

Gets a list of recipe for a given query

### Parameters

**name**(optional) - query the recipe by
name of food.

**Note**: _Getting paramaters by name is not avaliable. You can make general request with the sample url below. It will return all the recipes._

### Sample URL Request

[http://localhost:3000/api/recipe](http://localhost:3000/api/recipe)

```json
{
  "response": [
    {
      "name": "Moin Moin",
      "ingredients": [
        "2 cups peeled and blended black-eyed peas",
        "1/4 cup vegetable oil",
        "1 medium onion, finely chopped",
        "2-3 fresh peppers (scotch bonnet or habanero), finely chopped",
        "2 cloves garlic, minced",
        "1 teaspoon ground crayfish (optional)",
        "1 teaspoon ground cumin",
        "1 teaspoon ground paprika",
        "1 teaspoon thyme",
        "1 teaspoon curry powder",
        "1 teaspoon bouillon powder or cube (optional)",
        "Salt to taste",
        "1 cup fish, cooked and flaked (optional)",
        "1 cup cooked and peeled shrimp (optional)",
        "1 boiled egg, chopped (optional)",
        "Fresh cilantro or parsley for garnish",
        "Banana leaves or aluminum foil for wrapping"
      ],
      "description": "1. In a large bowl, combine the blended black-eyed peas, vegetable oil, chopped onion, chopped peppers, minced garlic, ground crayfish (if using), ground cumin, ground paprika, thyme, curry powder, bouillon powder (if using), and salt.\n2. Mix the ingredients thoroughly until well combined.\n3. If using fish, shrimp, or boiled egg, gently fold them into the mixture.\n4. Prepare your steaming vessel by greasing it with oil and lining it with banana leaves or aluminum foil.\n5. Spoon the moin moin mixture into the prepared vessel, filling each container about two-thirds full.\n6. Cover the containers with more banana leaves or aluminum foil to prevent water from getting in.\n7. Place the containers in a large pot or steamer with enough water to create steam. Steam the moin moin on medium heat for about 45 minutes to 1 hour, or until firm and cooked through.\n8. Once cooked, carefully remove the containers from the pot or steamer and allow them to cool slightly before unwrapping.\n9. Gently remove the moin moin from the containers and place them on a serving plate.\n10. Garnish with fresh cilantro or parsley.\n11. Serve the delicious Moin Moin as a side dish or as a main course with your favorite accompaniments."
    },
    {
      "name": "Asun Rice",
      "ingredients": [
        "2 cups parboiled rice",
        "1 pound goat meat, cut into bite-sized pieces",
        "1/4 cup vegetable oil",
        "1 medium onion, finely chopped",
        "3-4 fresh peppers (scotch bonnet or habanero), finely chopped",
        "2 cloves garlic, minced",
        "1 teaspoon ginger, minced",
        "1 teaspoon thyme",
        "1 teaspoon curry powder",
        "1 teaspoon paprika",
        "1 teaspoon cayenne pepper (adjust to taste)",
        "Salt to taste",
        "1 tablespoon tomato paste",
        "1 cup chicken or beef broth",
        "Fresh cilantro or parsley for garnish"
      ],
      "description": "1. Wash the parboiled rice thoroughly and set aside.\n2. In a large bowl, marinate the goat meat with chopped onions, minced garlic, minced ginger, thyme, curry powder, paprika, cayenne pepper, and salt. Allow it to marinate for at least 30 minutes, or preferably, overnight.\n3. Preheat a grill or grill pan over medium-high heat. Grill the marinated goat meat until it's cooked through and has a nice char on the edges. Set aside.\n4. In a large pot, heat the vegetable oil over medium heat. Add the chopped peppers and sauté for a few minutes until fragrant.\n5. Stir in the tomato paste and cook for another 2-3 minutes.\n6. Add the parboiled rice to the pot and stir well to coat the rice with the pepper and tomato mixture.\n7. Pour in the chicken or beef broth, then add thyme, curry powder, paprika, cayenne pepper, and salt. Stir to combine.\n8. Reduce the heat to low, cover the pot with a tight-fitting lid, and let the rice cook for about 20-25 minutes, or until the rice is tender and fully cooked.\n9. Once the rice is cooked, fluff it with a fork and gently fold in the grilled goat meat.\n10. Garnish with fresh cilantro or parsley.\n11. Serve the delicious Asun Rice with your favorite side dishes and enjoy!"
    },
    {
      "name": "Fisherman Soup",
      "ingredients": [
        "Assorted seafood (such as fish, shrimp, crab, and mussels), cleaned and prepared",
        "1/4 cup palm oil",
        "1 medium onion, finely chopped",
        "2-3 fresh peppers (scotch bonnet or habanero), finely chopped",
        "2 cloves garlic, minced",
        "1 teaspoon ground crayfish",
        "1 teaspoon ground pepper soup spice (or a mix of ginger, cloves, and other spices)",
        "1 teaspoon ground uziza seeds (optional)",
        "1 teaspoon ground ehuru (calabash nutmeg, optional)",
        "1 teaspoon ground uziza leaves (optional)",
        "1 teaspoon ground scent leaf (nchuanwu) or basil",
        "4 cups fish or vegetable broth",
        "2 cups water",
        "Salt to taste",
        "Fresh cilantro or parsley for garnish"
      ],
      "description": "1. In a large pot, heat the palm oil over medium heat. Add the chopped onions and sauté until translucent.\n2. Add the minced garlic and chopped peppers. Sauté for another 2-3 minutes until fragrant.\n3. Stir in the ground crayfish, pepper soup spice, ground uziza seeds (if using), ground ehuru (if using), and ground scent leaf. Mix well.\n4. Pour in the fish or vegetable broth and water. Bring the mixture to a simmer.\n5. Add the assorted seafood to the pot. You can start with the firmer seafood like fish and crab, and later add the more delicate ones like shrimp and mussels.\n6. Cover the pot and let the soup simmer for about 10-15 minutes, or until the seafood is cooked through.\n7. Season the soup with salt to taste.\n8. Just before serving, add the ground uziza leaves (if using) and the ground scent leaf or basil. Stir well.\n9. Garnish with fresh cilantro or parsley.\n10. Serve the flavorful Fisherman Soup in bowls with your choice of side dishes, such as pounded yam, fufu, or rice."
    },
    {
      "name": "Okra Soup",
      "ingredients": [
        "2 cups fresh okra, chopped",
        "1/2 pound meat (chicken, beef, or goat meat), cut into bite-sized pieces",
        "1/2 pound assorted seafood (shrimp, fish, or crab), cleaned and prepared",
        "1/4 cup palm oil",
        "1 medium onion, finely chopped",
        "2-3 fresh peppers (scotch bonnet or habanero), finely chopped",
        "2 cloves garlic, minced",
        "1 teaspoon ground crayfish",
        "1 teaspoon ground pepper soup spice (or a mix of ginger, cloves, and other spices)",
        "1 teaspoon ground uziza seeds (optional)",
        "1 teaspoon ground ehuru (calabash nutmeg, optional)",
        "4 cups meat or vegetable broth",
        "2 cups water",
        "Salt to taste",
        "Fresh spinach or other leafy greens, chopped",
        "Fresh cilantro or parsley for garnish"
      ],
      "description": "1. In a large pot, heat the palm oil over medium heat. Add the chopped onions and sauté until translucent.\n2. Add the minced garlic and chopped peppers. Sauté for another 2-3 minutes until fragrant.\n3. Stir in the ground crayfish, pepper soup spice, ground uziza seeds (if using), ground ehuru (if using). Mix well.\n4. Pour in the meat or vegetable broth and water. Bring the mixture to a simmer.\n5. Add the chopped okra to the pot. Cover and let it cook for about 10 minutes, stirring occasionally.\n6. Add the assorted seafood and meat to the pot. Cover and continue to simmer for another 10-15 minutes, or until the seafood and meat are cooked through.\n7. Season the soup with salt to taste.\n8. Just before serving, add the chopped leafy greens and stir until wilted.\n9. Garnish with fresh cilantro or parsley.\n10. Serve the delicious Okra Soup in bowls with your choice of side dishes, such as pounded yam, fufu, or rice."
    }
  ]
}
```
