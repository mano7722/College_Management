import express from "express";
import { postadd, postdataupdate, postdelete, postfind, postformupdate } from "../Controllers/PostControl.mjs";

let postRoute = express.Router();

// page
postRoute.get('/create',(req,res)=>{
    res.render('');
});

// add function
postRoute.post("/store",async(req,res)=>{
    let userdata=req.body;
    await postadd(userdata);
    res.redirect('');
});

// table function
postRoute.get("/list",async(req,res)=>{
    let datauser= await postfind();
    res.render("",{datauser});
});

// delete function
postRoute.get("/delete/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    await postdelete(id);
    res.redirect("");
});

// update form
postRoute.get("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let datauser= await postformupdate(id);
    res.render("",{datauser});
});

// update data function
postRoute.post("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let data=req.body;
    await postdataupdate(id,data);
    res.redirect("");
});

export default postRoute;