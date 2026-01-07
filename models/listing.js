const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default:"https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set:(v)=>v===""? undefined :v,
    },
    location:{
        type:String,
    },
    price:{
        type:Number,
    },
    country:{
        type:String,
    }
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;