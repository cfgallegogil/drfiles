import express from 'express'
import { getFormCtrl, formById, postFormCtrl, putFormCtrl } from '../controllers/formCtrl'
const router = express.Router()

router.get('/', getFormCtrl)
router.get('/:id', formById)
router.post('/', postFormCtrl)
router.put('/', putFormCtrl)

export default router