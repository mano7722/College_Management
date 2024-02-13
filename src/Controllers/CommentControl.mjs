import CommentDetails from "../Models/DesigModel.mjs";
import { ObjectId } from "mongodb";

export async function commentadd(data){
    let coll=await CommentDetails();
    let a=coll.insertOne(data);
    return a;
}
export async function commentfind(){
    let coll=await CommentDetails();
    let b=coll.find().toArray();
    return b;
}
export async function commentdelete(id){
    let coll=await CommentDetails();
    let studid = new ObjectId(id);
    await coll.deleteOne({_id:studid});
}
export async function commentformupdate(id){
    let coll=await CommentDetails();
    let studid = new ObjectId(id);
    let c=await coll.findOne({_id:studid});
    return c;
}
export async function commentdataupdate(id,data){
    let coll=await CommentDetails();
    let studid= new ObjectId(id);
    await coll.updateOne({_id:studid},{$set:data});
}
