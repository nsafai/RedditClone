var Post = require('../models/post');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    var post = new Post(req.body);
    console.log(req.body)
    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      console.log(req.body)
      return res.redirect(`/`);
    })

  });

  app.get('/', (req, res) => {
      Post.find({}).then((posts) => {
        res.render('posts-index.handlebars', { posts })
      }).catch((err) => {
        console.log(err.message);
      })
  })



};
