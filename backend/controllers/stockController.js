import jwt from "jsonwebtoken";
import Stock from "../models/stockModel.js";


export const display = async (req, res) => {
    const { itemName, itemInfo } = req.body;

    try {
        const existingStock = await Stock.findOne({ itemName });

        if (!existingStock) return res.status(404).json( { message: 'Stock doesn\'t exist' })


        const token = jwt.sign({ itemName: existingStock.itemName, itemInfo: itemInfo }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingStock, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}

export const add = async (req, res) => {
    const { itemName, itemInfo } = req.body

    try {
        const existingItem = await Stock.findOne({ itemName });

        if (existingItem) return res.status(404).json( { message: 'Item name already exists' })



        const result = await Stock.create({ itemName: itemName, itemInfo: itemInfo })


        const token = jwt.sign({ itemName: result.itemName, inStock: result.inStock, quantity: result.quantity, price: result.price, employeeKit: result.employeeKit }, 'test', { expiresIn: '1h'});
        
        res.status(200).json( { result, token }) 

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}

export const remove = async (req, res) => {
    const { itemName } = req.body;

    try {
        const existingStock = await Stock.findOne({ itemName });

        if (!existingStock) return res.status(404).json( { message: 'Stock doesn\'t exist' })


        const token = jwt.sign({ itemName: existingStock.itemName }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingStock, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        console.log(error);
    }
}