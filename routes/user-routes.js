const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../controllers/user-controller');

// set up GET all and POST at api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// set up Get one, PUT and DELETE at api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// set up PUT and DELETE
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;