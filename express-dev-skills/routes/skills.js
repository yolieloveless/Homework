var express = require('express');
var router = express.Router();
var skillCntrl = require('../controllers/skills')


router.get('/', skillCntrl.index);
router.post('/', skillCntrl.saveSkill);
router.get('/new', skillCntrl.newSkill);
router.get('/:id', skillCntrl.show);
router.get('/:id/edit', skillCntrl.edit);
router.delete('/:id', skillCntrl.removeSkill);
router.put('/:id', skillCntrl.update);

module.exports = router;
