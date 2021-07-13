import mongoose from 'mongoose';



const stockSchema = mongoose.Schema({
    itemName: { type: String, required: false },

    itemSupplier: { type: String, required: false },
    itemLocationInStorage: { type: String, required: false },
    itemQuantity: { type: Number, required: false },
    employeeId: { type: String, required: false },
    itemPrice: { type: Number, required: false },
    itemReorderPackaging: { type: String, required: false },
    itemCostPerUnit: { type: Number, required: false },
    itemCostPerSpareKit: { type: Number, required: false },
    itemCostPerKit: { type: Number, required: false },
    itemLocation: { type: String, required: false },

    maintSpareKit: { type: String, required: false },
    maintItemsReOrder: { type: String, required: false },
    maintQuantityReOrder: { type: String, required: false },
    maintPlace: { type: String, required: false },
    maintBrokenReturn: { type: String, required: false },
    maintReturnWindow: { type: String, required: false },
    maintOnSitePOA: { type: String, required: false },
    maintCategory: { type: String, required: false },




})

export default mongoose.model('Stock', stockSchema)