import express from 'express';
import { desigdataupdate, desigdelete, desigfind, desigformupdate, desiginsert } from "../Controllers/DesigControl.mjs";

let desigRoute = express.Router();

desigRoute.get('/createdesig',(req,res)=>{
    res.render('../src/Views/Designations/CreateDesig.ejs');
});

desigRoute.post('/store',async(req,res)=>{
    let userdata=req.body;
    await desiginsert(userdata);
    res.redirect('/desig/list');
});

desigRoute.get('/list',async(req,res)=>{
    let datauser= await desigfind();
    res.render("../src/Views/Designations/TableDesig",{datauser});
})

desigRoute.get('/delete/:id',async(req,res)=>{
    let id=req.url.split("/").pop();
    await desigdelete(id);
    res.redirect("/desig/list");
})

desigRoute.get('/update/:id',async(req,res)=>{
    let id=req.url.split("/").pop();
    let datauser= await desigformupdate(id);
    res.render("../src/Views/Designations/UpdateDesig",{datauser});
})

desigRoute.post('/update/:id',async(req,res)=>{
    let id=req.url.split("/").pop();
    let data=req.body;
    await desigdataupdate(id,data);
    res.redirect("/desig/list");
})

export default desigRoute;