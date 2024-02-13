import EmployDetails from "../Models/EmployModel.mjs";
import { ObjectId } from "mongodb";

export async function employinsert(data){
    let coll=await EmployDetails();
    let a=coll.insertOne(data);
    return a;
}
export async function employfind(){
    let coll=await EmployDetails();
    let b=coll.find().toArray();
    return b;
}
export async function getemployemail(data){
    let coll=await EmployDetails();
    let c=await coll.findOne({email:data});
    return c;
}
export async function employdelete(id){
    let coll=await EmployDetails();
    let studid = new ObjectId(id);
    await coll.deleteOne({_id:studid});
}
export async function employformupdate(id){
    let coll=await EmployDetails();
    let studid = new ObjectId(id);
    let c=await coll.findOne({_id:studid});
    return c;
}
export async function employdataupdate(id,data){
    let coll=await EmployDetails();
    let studid= new ObjectId(id);
    await coll.updateOne({_id:studid},{$set:data});
}
