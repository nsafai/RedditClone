describe('Posts', () => {
  it('should create with valid attributes at POST /posts', (done) => {
    // test code
    // Import your post model
    const Post = require('../models/post')

    // create a new post
    var post = { title: "post title", url: "https://www.google.com", summary: "post summary" }

    Post.findOneAndRemove(post, function() {
          // How many posts are there now?
          Post.find(function(err, posts) {
            var postCount = posts.count;
            chai.request('localhost:3000')
                .post('/posts', post)
                // .remove('/posts', post)
                .end(function (err, res){
                    // Check that the database has one more post in it
                    Post.find(function(err, posts) {
                        postCount.should.be.equal(posts + 1);
                        // Check that the response is a successful
                        res.should.have.status(200);
                        done();
                    });
                });
          });
    });
  })
})
