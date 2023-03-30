const express = require('express')
const Posts = require('../models/Posts')
const router = express.Router()

//Route 1 to get all the blogs

router.get('/getBlogs', async (req, res) => {
    try {
        const blogs = await Posts.find()
        res.status(200).json({totalBlogs : blogs.length , blogs : blogs.slice(0,parseInt(req.query.count))})
    }
    catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

//Route 2 to post a blog

router.post('/post', async (req, res) => {
    const { title, category, tags, author, preview, slug, content } = req.body
    try {
        const post = new Posts({
            title,
            category,
            tags,
            author,
            preview,
            slug,
            content,
        })
        const savedPost = await post.save()
        res.status(200).json({ success: "success", data: savedPost })
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})

//Route 3 to search for a particular blog

router.post('/search', async (req, res) => {
    let query;
    if (req.body.category) {
        query = { category: req.body.category };
    } else if (req.body.tags) {
        query = { tags: req.body.tags };
    } else if (req.body.slug) {
        query = { slug: req.body.slug };
    }

    try {
        const blogs = await Posts.find(query);
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router

