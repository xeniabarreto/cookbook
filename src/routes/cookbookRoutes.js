const router = require('express').Router();

const cookbookController = require('../controllers/cookbookController');

router.get('/all', cookbookController.getAllRecipes);
router.post('/', cookbookController.createRecipe);
router.get('/', cookbookController.getOneRecipe);
router.put('/:id', cookbookController.updateRecipeById);
router.delete('/:id', cookbookController.removeRecipeById);

module.exports = router;
