const express = require('express');

const router = express.Router();

// controllers 
const projectController = require('../app/Http/controllers/projectController');
const pageNotFoundController = require('../app/Http/controllers/pageNotFoundController');
const labelController = require('../app/Http/controllers/labelController');

router.get('/', projectController.index);
router.use('/project',require('./project'));
router.use('/issues',require('./issue'));
router.get('/labels/:name', labelController.getLabelsData);

// always keep it in the last 
router.get("*", pageNotFoundController.index);
module.exports = router;