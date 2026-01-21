const Listing=require("../models/listing")
const ExpressError = require("../utils/ExpressError");


module.exports.index=async (req,res)=>{
    const allListings=await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs")
}

module.exports.showlisting=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id).populate({path:"reviews",populate:{
        path:"author", },
}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requestd for does not exits");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}

module.exports.createlisting=async(req,res,next)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"Send valid data for listing");
    }
        const newListing=new Listing(req.body.listing);
        newListing.owner=req.user._id;
        if (req.file) {
        newListing.image = req.file.path;          // Cloudinary URL
        newListing.imageFilename = req.file.filename; // public_id
    }
        await newListing.save();
        req.flash("success","New Listing Added");
        res.redirect("/listings");
}

module.exports.editlisting=async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requestd for does not exits");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing});
}

module.exports.updatelisting=async(req,res)=>{
    let {id}=req.params;
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!="undefined"){
    let url=req.file.path;
    let filename=req.file.filename;
    listing.image = url;
    listing.imageFilename = filename;
    await listing.save();
    }
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deletelisting=async(req,res)=>{
    let {id}=req.params;
    let deletedListing=await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}