import PostDetails from "../Models/DesigModel.mjs";
import { ObjectId } from "mongodb";

export async function postadd(data){
    let coll=await PostDetails();
    let a=coll.insertOne(data);
    return a;
}
export async function postfind(){
    let coll=await PostDetails();
    let b=coll.find().toArray();
    return b;
}
export async function postdelete(id){
    let coll=await PostDetails();
    let studid = new ObjectId(id);
    await coll.deleteOne({_id:studid});
}
export async function postformupdate(id){
    let coll=await PostDetails();
    let studid = new ObjectId(id);
    let c=await coll.findOne({_id:studid});
    return c;
}
export async function postdataupdate(id,data){
    let coll=await PostDetails();
    let studid= new ObjectId(id);
    await coll.updateOne({_id:studid},{$set:data});
}
