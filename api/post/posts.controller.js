var _ = require('lodash')
var datastore = require('../datastore');
var Post = require('./post.model');

// error handling function
function handleError(res, err) {
	return res.send(500,err);
}

// get list of posts from mongo db
exports.index = function(req, res) {
	Post.find(function (err, posts) {
		if(err) {return handleError(res, err);}
		return res.json(200, posts);
	});
}

// get post from mogo db
exports.show = function(req, res) {
      Post.findById(req.params.id, function (err, post) {
          if(err) { return handleError(res, err); }
          return res.json(200, post);
      });
  } ;

// create a new Post in mongo db
exports.create = function(req, res) {
	Post.create(req.body, function(err, post) {
		if(err) {return handleError(res, err);}
		return res.json(201, post);
	});
}

// update an existing Post in mongo db
exports.update = function(req, res) {
	Post.findById(req.params.id, function (err, post) {
		post.title = req.body.title
		post.data = req.body.data
		post.createdAt = req.body.createdAt
		post.by = req.body.by
		post.save(function (err) {
			if(err) {return handleError(res, err);}
			return res.send(200, "Update seccessfull");
		});
	});
};


// delete an Post from mongo db
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    post.remove(function (err) {
      if(err) {return handleError(res, err);}
      return res.send(200, 'Deleted');
    });
  });
};