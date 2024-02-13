import DesigDetails from "../Models/DesigModel.mjs";
import { ObjectId } from "mongodb";

export async function desiginsert(data){
    let coll=await DesigDetails();
    let a=coll.insertOne(data);
    return a;
}
export async function desigfind(){
    let coll=await DesigDetails();
    let b=coll.find().toArray();
    return b;
}
export async function desigdelete(id){
    let coll=await DesigDetails();
    let studid = new ObjectId(id);
    await coll.deleteOne({_id:studid});
}
export async function desigformupdate(id){
    let coll=await DesigDetails();
    let studid = new ObjectId(id);
    let c=await coll.findOne({_id:studid});
    return c;
}
export async function desigdataupdate(id,data){
    let coll=await DesigDetails();
    let studid= new ObjectId(id);
    await coll.updateOne({_id:studid},{$set:data});
}
