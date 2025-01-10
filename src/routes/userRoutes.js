import {Router} from "express";

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
  res.status(200).send('Sign up');
})

export default userRouter;
