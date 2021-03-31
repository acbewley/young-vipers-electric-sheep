const router = require("express").Router();
const { User, Dream } = require("../models");
const withAuth = require("../utils/auth");
const zodiac = require('zodiac-signs')();

router.get("/", async (req, res) => {
  try {
    const dreamData = await Dream.findAll({
      include: [{ model: User }]
    });
    const dreams = dreamData.map((dream) => dream.get({ plain: true }));
    console.log(dreams)
    res.render("homepage", {
      logged_in: req.session.logged_in,
      dreams
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signup", async (req, res) => {
  try {
    res.render("signup", {
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const dreamData = await Dream.findAll({
      where: {
        user_id: userData.id
      }
    })

    const user = userData.get({ plain: true });
    const sign = zodiac.getSignByDate({ day: userData.day, month: userData.month })
    const dreams = dreamData.map((dream) => dream.get({ plain: true }));

    res.render("profile", {
      ...user,
      logged_in: true,
      ...sign,
      dreams
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-dreams', withAuth, (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('new-dreams');
})

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get('/:id', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login')
  }

  try {
      const dreamData = await Dream.findByPk(req.params.id)
      const dream = dreamData.get({ plain: true });

      res.render('edit-dreams', {
          ...dream
      })
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;
