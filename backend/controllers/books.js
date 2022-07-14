const {Books} = require('../config/db/conection')

const allbooks = async(req,res)=>{
    all = await Books.find()
    res.status(200).json({all})
}
const postbook = async (req,res) =>{
    const book = await Books.create(req.body);
}
module.exports = {
    allbooks,
    postbook
}