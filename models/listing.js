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
        default:"hhttps://unsplash.com/photos/loungers-near-swimming-pool-msIWv99PiAM",
        set:(v)=>v===""?"https://unsplash.com/photos/loungers-near-swimming-pool-msIWv99PiAM":v,
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