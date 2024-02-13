import express from "express";
import { commentadd, commentdataupdate, commentdelete, commentfind, commentformupdate } from "../Controllers/CommentControl.mjs";

let commentRoute = express.Router();

// page
commentRoute.get('/create',(req,res)=>{
    res.render('');
});

// add function
commentRoute.post("/store",async(req,res)=>{
    let userdata=req.body;
    await commentadd(userdata);
    res.redirect('');
});

// table function
commentRoute.get("/list",async(req,res)=>{
    let datauser= await commentfind();
    res.render("",{datauser});
});

// delete function
commentRoute.get("/delete/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    await commentdelete(id);
    res.redirect("");
});

// update form
commentRoute.get("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let datauser= await commentformupdate(id);
    res.render("",{datauser});
});

// update data function
commentRoute.post("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let data=req.body;
    await commentdataupdate(id,data);
    res.redirect("");
});

export default commentRoute;