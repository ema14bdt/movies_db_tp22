const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');


router.get('/api/genres', genresController.list);
router.get('/api/genres/:id', genresController.detail);


module.exports = router;