const express = require('express')
const {GetPosts, CreatePost, UpdatePost, DeletePost} = require('../controllers/post')
const verify_token = require('./verify')

const router = express.Router()

router.get('/', verify_token, GetPosts)
router.post('/', verify_token, CreatePost)
router.put('/:id', verify_token, UpdatePost)
router.delete('/:id', verify_token, DeletePost)

module.exports = router

