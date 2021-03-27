const router = require('express').Router();
const { Dream } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', async (req, res) => {
    try {
        const dreamData = await Dream.findByPk(req.params.id)
        const dream = dreamData.get({ plain: true });
        console.log(dream);
        res.render('dream', {
            ...dream
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;