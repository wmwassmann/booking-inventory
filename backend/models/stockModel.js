import mongoose from 'mongoose';



const stockSchema = mongoose.Schema({
    itemName: { type: String, required: true },
    itemInfo: {        
        inStock: { type: Boolean, required: false },
        quantity: { type: Number, required: false },
        price: { type: Number, required: true },
        employeeKit: { type: String, required: false }
    }


})

export default mongoose.model('Stock', stockSchema)