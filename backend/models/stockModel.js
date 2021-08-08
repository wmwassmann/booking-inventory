import mongoose from 'mongoose';



const stockSchema = mongoose.Schema({
    itemName: { type: String, required: false },

    itemSupplier: { type: String, required: false },
    itemLocationInStorage: { type: String, required: false },
    itemQuantity: { type: Number, required: false },
    employeeId: { type: String, required: false },
    itemPrice: { type: Number, required: false }





})

var Stock = mongoose.model('Stock', stockSchema)

export default Stock;


