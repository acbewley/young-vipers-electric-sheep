const router = require('express').Router();
const { Dream } = require('../../models');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const dreamData = await Dream.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(dreamData);
    } catch (err) {
        res.status(400).json(err)
    };
});

router.put('/:id', withAuth, (req, res) => {
    try {
        Dream.update(
            {
                subject: req.body.subject,
                body: req.body.body
            },
            {
                where: {
                    id: req.params.id,
                    user_id: req.session.user_id
                }
            }
        )
        res.status(200).json({ message: 'Success!' })
    } catch (err) {
        res.status(500).json(err);
    }  
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const dreamData = await Dream.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if (!dreamData) {
            res.status(404).json({ message: 'Could not find a dream with this ID.' })
            return;
        }
        res.status(200).json(dreamData);
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;