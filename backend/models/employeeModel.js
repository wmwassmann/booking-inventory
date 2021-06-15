import mongoose from 'mongoose';



const employeeSchema = mongoose.Schema({
    employeeUsername: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirm: {
        type: String,
        required: true
    },
    employeePosition: {
        type: String,
        required: true
    },
    employeeId: {
        type: Number,
        required: true
    },
    
})

export default mongoose.model('Employees', employeeSchema)
