const Recipe = require("../models/recipe");
const sequelize = require("../sequelize");

const router = require("express").Router();

router.get("/", async(req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.status(200).json({recipes: recipes});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.post("/", async(req, res) => {
    try {
        const newRecipe = await Recipe.create(req.body);
        res.status(200).json({recipe: newRecipe});
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.get('/sync', async (req, res) => {
    try {
      await sequelize.sync({ force: true })
      const sampleData = [{
            name: "apple pie",
            prepTime: 100,
            difficulty: "beginner"
        },
        {
            name: "macarons",
            prepTime: 180,
            difficulty: "advanced"
        },
        {
            name: "cookies",
            prepTime: 40,
            difficulty: "beginner"
        }
      ];

      for (const item of sampleData) {
        const recipe = new Recipe(item);
        await recipe.save();
      }

      res.status(201).json({ message: "sample db created" })
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.put("/:recipeId", async(req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.recipeId);
        if (recipe) {
            const updatedRecipe = await recipe.update(req.body);
            res.status(200).json({recipe: updatedRecipe});
        } else {
            res.status(404).json({message: "recipe not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

router.delete("/:recipeId", async(req, res) => {
    try {
        const recipe = await Recipe.findByPk(req.params.recipeId);
        if (recipe) {
            await recipe.destroy();
            res.status(200).json({message: "deleted recipe"});
        } else {
            res.status(404).json({message: "recipe not found."});
        }
    } catch (err) {
        res.status(500).json({message: "server error", err: err})
    }
});

module.exports = router;