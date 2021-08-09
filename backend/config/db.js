import mongoose from 'mongoose' 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.ATLAS_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        // console.log('MongoDB Connection Successful from Config')
    } catch (error) {
        // console.log('MongoDB Connection Failure from Config')
        process.exit(1)
    }
}

export default connectDB