import DepartDetails from "../Models/DepartModel.mjs";
import { ObjectId } from "mongodb";

export async function departinsert(data){
    let coll=await DepartDetails();
    let a=coll.insertOne(data);
    return a;
}
export async function departfind(){
    let coll=await DepartDetails();
    let b=coll.find().toArray();
    return b;
}
export async function departdelete(id){
    let coll=await DepartDetails();
    let studid = new ObjectId(id);
    await coll.deleteOne({_id:studid});
}
export async function departformupdate(id){
    let coll=await DepartDetails();
    let studid = new ObjectId(id);
    let c=await coll.findOne({_id:studid});
    return c;
}
export async function departdataupdate(id,data){
    let coll=await DepartDetails();
    let studid= new ObjectId(id);
    await coll.updateOne({_id:studid},{$set:data});
}
