import express from 'express';
const router = express.Router();

import Stock from '../models/stockModel.js';
import { display, add, edit,  remove } from '../controllers/stockController.js'
// import authention from '../middleware/authentication.js' 


router.route('/stock').get((req, res) => {
    Stock.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/stock', display)
router.post('/stock/add', add)
router.put('/stock/edit', edit)
router.delete('/stock/remove', remove)

export default router;
