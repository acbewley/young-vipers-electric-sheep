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

router.get("/new-dreams", withAuth,(req, res) => {
    Dream.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'subject',
        'body'
      ],
      include: [
        {
          model: User,
          attributes: ['user_name', 'sign']
        }
      ]
    })
    .then(dreamData => {
      const dreams = dreamData.map(dream = dream.get({ plain: true }));
      res.render('new-dreams', {dreams, logged_in:true});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;