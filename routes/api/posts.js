const express = require('express');
const router = express.Router();
const postModel = require('../../model/posting');
const passport = require('passport');
const authCheck = passport.authenticate('jwt', { session: false });
const validatePostInput = require('../../validation/post');

// @route POST localhost:4000/posts
// @desc Tests posts route
// @access Private
router.post('/', authCheck, (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    if(!isValid){
        return res.json(errors);
    }
    const newPost = new postModel({
        text: req.body.text,
        title: req.body.title,
        name: req.user.name,
        avatar: req.user.avatar,
        user: req.user.id
    });
    newPost
            .save()
            .then(post => res.json(post))
            .catch(err => res.json(err));
});

// @route GET localhost:4000/posts/total
// @desc get posts
// @access Private & Public
router.get('/total', (req, res) => {
    postModel
        .find()
        .sort({ date: -1 }) //날짜에 맞춰서 최신순이 위로 게시된다
        .then(posts => {
            res.json({
                count: posts.length,
                posts: posts
            });
        })
        .catch(err => res.json(err));
});

// @route GET localhost:4000/posts/:postId
// @desc get detail posts
// @access Private
router.get('/:postId', authCheck, (req, res) => {
    const id = req.params.postId;
    postModel
        .findById({_id: id})
        .then(post => {
            if(!post){
                return res.json({
                    msg: 'There is no posts for this user'
                });
            } else{
                res.json(post);
            }
        })
        .catch(err => res.json(err));
});


module.exports = router;