import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h1>Welcome!</h1>');
});

router.post('/sign-in', function(req, res, next) {
  res.status(200).json({
    msg: 'sign-in'
  });
});


router.post('/sign-out', function(req, res, next) {
  res.status(200).json({
    msg: 'sign-out'
  });
});

router.post('/sign-up', function(req, res, next) {
  res.status(200).json({
    msg: 'sign-up'
  });
});

export default router;
