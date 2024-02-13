import express from "express";
import bcrypt from "bcrypt";
import { employdataupdate, employdelete, employfind, employformupdate, employinsert, getemployemail } from "../Controllers/EmployControl.mjs";
import uploads from "../imageupload.mjs";

let employRoute = express.Router();

// signup in function
employRoute.get('/create',(req,res)=>{
    res.render('../src/Views/Employees/SignupEmploy.ejs');
});

// app.post("/signpage",uploads.single('image'), (req, res) => {
//     employin(req,res);

// add in function
employRoute.post("/store",uploads.single("image"), async(req,res)=>{
    let userdata=req.body;
    userdata.image= req.file.filename;
    let has= await bcrypt.hash(userdata.pswd,10);
    userdata.pswd=has;
    await employinsert(userdata);
    res.render("../src/Views/Employees/Login.ejs");
});

// Show login page
employRoute.get('/login',(req,res)=>{
    res.render('../src/Views/Employees/login.ejs');
});

// log in function
employRoute.post("/login",async(req,res)=>{
    let data1=req.body;
    let user= await getemployemail(data1.email);
    let e= await bcrypt.compare(data1.pswd,user.pswd);
    if(e){
        res.render("../src/Views/Dashboard.ejs",{user});
    }
    else{
        res.render("../src/Views/Employees/SignupEmploy.ejs");
    }   
});

// show table
employRoute.get("/list",async(req,res)=>{
    let datauser= await employfind();
    res.render("../src/Views/Employees/TableEmploy.ejs",{datauser});
});

// delete function
employRoute.get("/delete/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    await employdelete(id);
    res.redirect("/employ/list");
});

// show update page
employRoute.get("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let datauser= await employformupdate(id);
    res.render("../src/Views/Employees/UpdateSignup.ejs",{datauser});
});

// update function
employRoute.post("/update/:id",async(req,res)=>{
    let id=req.url.split("/").pop();
    let data=req.body;
    await employdataupdate(id,data);
    res.redirect("/employ/list");
});

// user function
employRoute.get("/user/:id",async(req,res)=>{
    let id = req.url.split('/').pop();
    let user =await employformupdate(id);
    res.render('../src/Views/component/user.ejs',{user});
});

export default employRoute;