const mongoose = require('mongoose');
const CookbookModel = require('../models/cookbookModel');

const errorMessage =
  'There was a problem processing your resquest. Please try again later.';
const notFoundMessage = 'Not found.';

const createRecipe = async (req, res) => {
  const {
    title,
    author,
    recipes_type,
    cooking_time,
    servers,
    ingredients,
    method,
  } = req.body;

  if (typeof title !== 'string')
    return res.status(400).json({ message: 'Title must be a string' });

  if (typeof author !== 'string')
    return res.status(400).json({ message: 'Author must be a string' });

  if (typeof recipes_type !== 'string')
    return res.status(400).json({ message: 'Recipes type must be a string' });

  if (typeof cooking_time !== 'string')
    return res.status(400).json({ message: 'Cooking time must be a string' });

  if (typeof servers !== 'number')
    return res.status(400).json({ message: 'Servers must be a number' });

  if (!Array.isArray(ingredients))
    return res.status(400).json({ message: 'Ingredients must be a array' });

  if (typeof method !== 'string')
    return res.status(400).json({ message: 'Method must be a string' });

  if (!title) return res.status(400).json({ message: 'Title is required' });

  if (!author) res.status(400).json({ message: 'Author is required' });

  if (!recipes_type)
    return res.status(400).json({ message: 'Recipes type is required' });

  if (!cooking_time)
    return res.status(400).json({ message: 'Cooking time is required' });

  if (!servers) return res.status(400).json({ message: 'Servers is required' });

  if (!ingredients)
    return res.status(400).json({ message: 'Ingredients is required' });

  if (!method) return res.status(400).json({ message: 'Method is required' });

  try {
    const newRecipe = await new CookbookModel({
      _id: new mongoose.Types.ObjectId(),
      title,
      author,
      recipes_type,
      cooking_time,
      servers,
      ingredients,
      method,
    }).save();

    res.status(200).json({
      newRecipe,
    });
  } catch (error) {
    res.status(500).json({
      menssage: errorMessage,
    });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await CookbookModel.find();
    res.status(200).json({
      allRecipes,
    });
  } catch (error) {
    res.status(500).json({ errorMessage });
  }
};

const getOneRecipe = async (req, res) => {
  try {
    const findRecipe = await CookbookModel.find(req.query);

    if (findRecipe.length === 0) {
      return res.status(404).json({
        message: notFoundMessage,
      });
    }

    if (findRecipe) {
      res.status(200).json({
        findRecipe,
      });
    }
  } catch (error) {
    res.status(500).json({
      menssage: errorMessage,
    });
  }
};

const updateRecipeById = async (req, res) => {
  let {
    title,
    author,
    recipes_type,
    cooking_time,
    servers,
    ingredients,
    method,
  } = req.body;
  const recipeId = req.params.id;

  try {
    const findRecipe = await CookbookModel.findById(recipeId);

    if (!findRecipe) {
      res.status(404).json({
        message: notFoundMessage,
      });
      return;
    }
    const updatedRecipe = {
      title: title ?? findRecipe.title,
      author: author ?? findRecipe.author,
      recipes_type: recipes_type ?? findRecipe.recipes_type,
      cooking_time: cooking_time ?? findRecipe.cooking_time,
      servers: servers ?? findRecipe.servers,
      ingredients: ingredients ?? findRecipe.ingredients,
      method: method ?? findRecipe.method,
    };
    const recipe = await CookbookModel.findByIdAndUpdate(
      recipeId,
      updatedRecipe
    );

    if (recipe) {
      res.status(200).json({
        updatedRecipe,
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      menssage: errorMessage,
    });
  }
};

const removeRecipeById = async (req, res) => {
  const recipeId = req.params.id;
  try {
    const findRecipe = await CookbookModel.findByIdAndDelete(recipeId);

    if (findRecipe) {
      res.status(200).json({
        message: 'Recipe successfully deleted',
      });
      return;
    }

    res.status(404).json({
      message: notFoundMessage,
    });
  } catch (error) {
    res.status(500).json({
      menssage: errorMessage,
    });
  }
};

module.exports = {
  getAllRecipes,
  getOneRecipe,
  createRecipe,
  removeRecipeById,
  updateRecipeById,
};
