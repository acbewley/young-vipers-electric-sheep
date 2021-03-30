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

router.get('/edit/:id', withAuth, (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const dreamData = Dream.findByPk(req.params.id)
        res.render('edit-dreams', {
            ...dreamData
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;