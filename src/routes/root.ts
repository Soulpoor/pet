import express from 'express';
import { AuthService } from '../services/AuthService';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<h1>Welcome!</h1>');
});

router.post('/sign-in', async (req, res, next) => {
  const signInData = req.body;
  const user = await AuthService.getInstance().signInHandler(signInData);
  if (user) {
    res.status(200).json({
      data: user,
      msg: 'sign-in success.'
    });
  } else {
    res.status(401).json({
      msg: 'Your account does not exist or password error, please try again!'
    });
  }
});


router.post('/sign-out', async (req, res, next) => {
  res.status(200).json({
    msg: 'sign-out'
  });
});

router.post('/sign-up', async (req, res, next) => {
  const signUpData = req.body;
  const user = await AuthService.getInstance().signUpHandler(signUpData);
  if (user) {
    res.status(200).json({
      data: user,
      msg: 'sign-up success.'
    });
  } else {
    res.status(200).json({
      msg: 'The account has been registered!'
    });
  }
});

export default router;
