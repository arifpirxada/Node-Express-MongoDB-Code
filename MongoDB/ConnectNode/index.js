
const { MongoClient } = require('mongodb')

const uri = 'mongodb://127.0.0.1'

const client = new  MongoClient(uri)

const main = async () => {
    await client.connect()
    const db = client.db("tempTest")

    const collec = db.collection('products')
    const data = await collec.find({id: 31}).toArray()
    console.log(data[0].comments)
}

main()
.then(console.log())
.catch((e) => console.error(e))
.finally(() => client.close())




