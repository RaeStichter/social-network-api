const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../controllers/thought-controller');

// set up GET all and POST at api/thoughts
router
    .route('/')
    .get(getAllThought);

// set up thought based on user id
router
    .route('/:userId')
    .post(createThought);

// set up Get one, PUT and DELETE at api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)

// set up remove thought
router
    .route('/:userId/:thoughtId')
    .delete(deleteThought);

// set up add reaction api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    
// set up delete for reactions /thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;