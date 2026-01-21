const mongoose=require("mongoose");
const Review=require("./review.js")

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
    default:"https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=2128&auto=format&fit=crop",
},

imageFilename:{
    type:String,
},

    location:{
        type:String,
    },
    price:{
        type:Number,
    },
    country:{
        type:String,
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        }
    ],
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}});
}
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;