import express from 'express';
const router = express.Router();

import Employee from '../models/employeeModel.js';
import { signin, signup } from '../controllers/employeeController.js'
// import authention from '../middleware/authentication.js' 


router.route('/').get((req, res) => {
    Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/signin', signin)
router.post('/signup', signup)

export default router;


