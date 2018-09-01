module.exports = (app) => {
  // CREATE
  app.post('/posts/new', (req,res) => {
      // if (!req.body) return res.sendStatus(400)
      console.log(req.body)
  });
};
