const mongoose = require('mongoose');

const conectionDB = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASEC, {
            useUnifiedTopology: true,
            useNewUrlParser: true ,
    })
    }catch(err){
        console.error(err)
    }

}

const bookShema= new mongoose.Schema({
    user:{
        type:String,
        require: true
    },
    title:{
        type:String,
        require : [true, "must provide a title"],
        maxlength: [20, "title cant be more than 20 characters"]
    },
    content:{
        type:String
    }
    
})
const UserShema = new mongoose.Schema({
    username: {
        type:String,
        require : [true, "must provide a username"],
        minlength : [3, "username cant be less than 6 charactes"]
    },
    hash:String,
    salt:String,
})

const User = mongoose.model('User', UserShema);
const Books = mongoose.model('book', bookShema);


module.exports= {
    conectionDB,
    Books,
    User
}
