const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const Listing=require("../models/listing.js");
const {isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listing.js");
const multer=require('multer');
const {storage}=require("../cloudConfig.js");
const upload=multer({storage});
 



//INDEX AND CREATE ROUTE
router
.route("/")
.get(wrapAsync( listingController.index))
.post(isLoggedIn,upload.single("listing[image]"),validateListing,wrapAsync (listingController.createlisting));
// .post(upload.single("listing[image]"),(req,res)=>{
//     res.send(req.file);
// })

//new route

router.get("/new",isLoggedIn,listingController.renderNewForm);

//UPDATE, SHOW  AND DELETE ROUTE
router
.route("/:id")
.get(wrapAsync(listingController.showlisting))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.updatelisting))
.delete(isLoggedIn,isOwner,(listingController.deletelisting));



//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editlisting))

module.exports=router; 