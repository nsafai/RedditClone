## Summary

Following this [tutorial](https://www.makeschool.com/academy/track/reddit-clone-in-node-js)


- [x] Setup server
- [x] Install templating engine - Handlebars
- [x] Create a post
    - [x] Make a posts#new route (/posts/new) and template (posts-new.handlebars)
    - [x] Add form to posts-new template
    - [x] Make create posts route and check that form data is sending to new route
    - [x] Add Post model with mongoose
    - [x] Confirm posts are saving to database
    - [ ] Confirm createdAt/updatedAt are saving to db
- [x] Show all posts
    - [x] Make the root route (/) go to the posts#index route render a posts-index template
    - [x] Style the template and loop over the posts object
    - [ ] Make route to posts#show route (/posts/:id)
    - [ ] Style the template and display the post object
- [ ] Comment on posts
- [ ] Create subreddits
- [ ] Create a post on a subreddit
- [ ] Show all subreddits
- [ ] Sign up and Login
- [ ] Associate posts, comments with their author
- [ ] Make comments on comments
- [ ] Vote a post up
- [ ] Vote a comment up
- [ ] Sort posts by # of votes
