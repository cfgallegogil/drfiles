import express from 'express'
import { getFileCtrl, fileById, postFileCtrl, putFileCtrl } from '../controllers/fileCtrl'
const router = express.Router()

router.get('/', getFileCtrl)
router.get('/:id', fileById)
router.post('/', postFileCtrl)
router.put('/', putFileCtrl)

export default router