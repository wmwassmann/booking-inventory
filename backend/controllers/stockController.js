import jwt from "jsonwebtoken";
import express from 'express';
import mongoose from 'mongoose';
import Stock from "../models/stockModel.js";

const router = express.Router();

export const display = async (req, res) => {
    const { itemName } = req.body;

    try {
        const existingStock = await Stock.findOne({ itemName });

        if (!existingStock) return res.status(404).json( { message: 'Stock doesn\'t exist' })


        const token = jwt.sign({ itemName: existingStock.itemName }, 'test', { expiresIn: '1h'});

        res.status(200).json( { result: existingStock, token }) 

    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        // console.log(error);
    }
}

export const add = async (req, res) => {
    const { 
        itemName, 
        itemSupplier, 
        itemLocationInStorage, 
        itemQuantity, 
        itemPrice,
        employeeId,
        id        
    } = req.body

    try {
        const existingItem = await Stock.findOne({ itemName });

        if (existingItem) return res.status(404).json( { message: 'Item name already exists' })

        const result = await Stock.create({  
            itemName: itemName, 
            itemSupplier: itemSupplier, 
            itemLocationInStorage: itemLocationInStorage,
            employeeId: employeeId, 
            itemQuantity: itemQuantity,
            itemPrice: itemPrice,  
            id: id
        })


        const token = jwt.sign({ 
            itemName: result.itemName, 
            itemSupplier: result.itemSupplier, 
            itemLocationInStorage: result.itemLocationInStorage,
            employeeId: result.employeeId,
            itemQuantity: result.itemQuantity,
            itemPrice: result.itemPrice,  
            id: result.id
        
        
        
        
        }, 'test', { expiresIn: '1h'});
        
        res.status(200).json( { result, token }) 

    } catch(error) {
        res.status(500).json({ message: 'Something went wrong' }) 
        // console.log(error);
    }
}


export const edit = async (req, res) => {
    const { id } = req.params;
    const { itemName, itemSupplier, itemLocationInStorage, itemQuantity, itemPrice, employeeId } = req.body;


    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No item with that ${id}`)

    const editedItem = { itemName, itemSupplier, itemLocationInStorage, itemQuantity, itemPrice, employeeId, _id: id } 

    await Stock.findByIdAndUpdate(id, editedItem, { new: true})

    res.json(editedItem)
    // console.log(editedItem)

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
        // console.log(error);
    }
}

export default router;