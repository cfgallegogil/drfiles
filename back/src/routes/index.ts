import express from 'express';

import userRouter from './user'
import formRouter from './form'
import fileRouter from './file'

const router = express.Router();

router.use('/user', userRouter)
router.use('/form', formRouter)
router.use('/file', fileRouter)

export default router