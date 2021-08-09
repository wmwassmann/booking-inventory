
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Employees from "../models/employeeModel.js";


export const displayEmployee = async (req, res) => {
    const { employeeId } = req.body;

    try {
        const existingEmployee = await Employees.findOne({ employeeId });

        if (!existingEmployee) return res.status(404).json( { message: 'Stock doesn\'t exist' })


        const token = jwt.sign({ employeeId: existingEmployee.employeeId }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingEmployee, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        // console.log(error);
    }
}

export const signin = async (req, res) => {
    const { employeeId, password } = req.body;

    try {
        const existingEmployee = await Employees.findOne({ employeeId });

        if (!existingEmployee) return res.status(404).json( { message: 'Employee doesn\'t exist' })

        const isPasswordCorrect = await bcrypt.compare(password, existingEmployee.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' })

        const token = jwt.sign({ employeeId: existingEmployee.employeeId, id: existingEmployee.set._id }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingEmployee, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        // console.log(error);
    }
}

export const signup = async (req, res) => {
    const { employeeUsername, email, password, passwordConfirm, employeeId, employeePosition } = req.body

    try {
        const existingEmployee = await Employees.findOne({ employeeId });

        if (existingEmployee) return res.status(404).json( { message: 'Employee already exists' })

        if (password !== passwordConfirm) return res.status(400).json({ message: 'Passwords don\'t match' })

        const hashedPassword = await bcrypt.hash(password, 12)
        const hashedPasswordConfirm = await bcrypt.hash(passwordConfirm, 12)

        const result = await Employees.create({ employeeUsername: `${employeeUsername}`, email: email, password: hashedPassword, passwordConfirm: hashedPasswordConfirm, employeeId: `${employeeId}`, employeePosition: employeePosition })


        const token = jwt.sign({ employeeUsername: result.employeeUsername, email: result.email, employeeId: result.employeeId, employeePosition: result.employeePosition, id: result._id }, 'test', { expiresIn: '1h'});
        
        res.status(200).json( { result, token }) 
        
    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        // console.log(error);
    }
}
