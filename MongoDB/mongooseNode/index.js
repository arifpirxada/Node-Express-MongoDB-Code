const mongoose = require("mongoose")

const uri = "mongodb://127.0.0.1/tempTest" 

mongoose.connect(uri)

// Creating a Schema

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    comments: [Object]
})

// Creating a Model

const product = new mongoose.model("product", productSchema)

const main = async () => {
    try {
        // Read Data
        // const data = await product.find({id: 40})
        // console.log(data)

        // Insert Data
        // await product.insertMany({
        //     id: 40,
        //     title: "arifpirxada"
        // })

        // Update Data
        // await product.findOneAndUpdate({
        //     id: 40
        // },{
        //     $set: {
        //         title: "updatedTitle"
        //     }
        // })

        // Delete Data
        await product.findOneAndDelete({
            id: 40
        })

    } catch (e){
        console.error(e)
    } finally {
        mongoose.connection.close()
    }
}
main()