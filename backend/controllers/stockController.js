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
    const { 
        itemName, 
        itemSupplier, 
        itemLocationInStorage, 
        itemQuantity, 
        itemPrice,
        itemReorderPackaging,
        itemCostPerUnit,
        itemCostPerSpareKit,
        itemCostPerKit,
        itemLocation,
        maintSpareKit,
        maintItemsReOrder,
        maintQuantityReOrder,
        maintPlace,
        maintBrokenReturn,
        maintReturnWindow,
        maintOnSitePOA,
        maintCategory,
        employeeId
        
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
            itemReorderPackaging: itemReorderPackaging,
            itemCostPerUnit: itemCostPerUnit,
            itemCostPerSpareKit: itemCostPerSpareKit,
            itemCostPerKit: itemCostPerKit,
            itemLocation: itemLocation,
            maintSpareKit: maintSpareKit,
            maintItemsReOrder: maintItemsReOrder,
            maintQuantityReOrder: maintQuantityReOrder,
            maintPlace: maintPlace,
            maintBrokenReturn: maintBrokenReturn,
            maintReturnWindow: maintReturnWindow,
            maintOnSitePOA: maintOnSitePOA,
            maintCategory: maintCategory
        })


        const token = jwt.sign({ 
            itemName: result.itemName, 
            itemSupplier: result.itemSupplier, 
            itemLocationInStorage: result.itemLocationInStorage,
            employeeId: result.employeeId,
            itemQuantity: result.itemQuantity,
            itemPrice: result.itemPrice,
            itemReorderPackaging: result.itemReorderPackaging,
            itemCostPerUnit: result.itemCostPerUnit,
            itemCostPerSpareKit: result.itemCostPerSpareKit,
            itemCostPerKit: result.itemCostPerKit,
            itemLocation: result.itemLocation,
            maintSpareKit: result.maintSpareKit,
            maintItemsReOrder: result.maintItemsReOrder,
            maintQuantityReOrder: result.maintQuantityReOrder,
            maintPlace: result.maintPlace,
            maintBrokenReturn: result.maintBrokenReturn,
            maintReturnWindow: result.maintReturnWindow,
            maintOnSitePOA: result.maintOnSitePOA,
            maintCategory: result.maintCategory
        
        
        
        
        }, 'test', { expiresIn: '1h'});
        
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