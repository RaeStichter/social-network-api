const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});
  
module.exports = router;

// const userRoutes = require('./api/user-routes');
// const thoughtRoutes = require('./thought-routes');


// router.use('/thoughts', thoughtRoutes);
// router.use('/users', userRoutes);

// module.exports = router;