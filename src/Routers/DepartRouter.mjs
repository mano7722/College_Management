import express from "express";
import { departdataupdate, departdelete, departfind, departformupdate, departinsert } from "../Controllers/DepartControl.mjs";

let departRoute = express.Router();

departRoute.get('/create',(req,res)=>{
    res.render('../src/Views/Departments/CreateDepart.ejs');
});
departRoute.post("/store",async(req,res)=>{
    let userdata=req.body;
    await departinsert(userdata);
    res.redirect('/depart/list');
});
departRoute.get("/list",async(req,res)=>{
    let datauser= await departfind();
    res.render("../src/Views/Departments/TableDepart",{datauser});
});
departRoute.get("/delete/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    await departdelete(id);
    res.redirect("/depart/list");
});
departRoute.get("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let datauser= await departformupdate(id);
    res.render("../src/Views/Departments/UpdateDepart.ejs",{datauser});
});
departRoute.post("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let data=req.body;
    await departdataupdate(id,data);
    res.redirect("/depart/list");
});

export default departRoute;