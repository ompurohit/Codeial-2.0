const express = require('express');

const router = express.Router();

const projectController = require('../app/Http/controllers/projectController');


router.get('/', projectController.index);
router.get('/:_id', projectController.issue);

router.get('/create', projectController.create);
router.post('/store', projectController.store);



module.exports = router;