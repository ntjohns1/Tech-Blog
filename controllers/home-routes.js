const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const { format_date } = require('../utils/helpers.js')

// get all posts for homepage
router.get('/', async (req, res) => {
  try {
    // we need to get all Posts and include the User for each (change lines 8 and 9)
    const postData = await Post.findAll({
      include: [ User ],
    });
    // serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));
    for (let i = 0; i < posts.length; i++) {
      posts[i].formattedDate = format_date(posts[i].createdAt);
    }
    // we should render all the posts here
    res.render('all-posts', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    // what should we pass here? we need to get some data passed via the request body (something.something.id?)
    // change the model below, but not the findByPk method.
    const postData = await Post.findByPk(req.body.id, {
      // helping you out with the include here, no changes necessary
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    console.log(postData); 
    if (postData) {
      // serialize the data
      const post = postData.get({ plain: true });
      // which view should we render for a single-post?
      res.render('/single-post', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// giving you the login and signup route pieces below, no changes needed.
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
