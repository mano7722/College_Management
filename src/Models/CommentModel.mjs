import {client} from "../Config.mjs";
export default async function CommentDetails(){
        await client.connect();
        let db=client.db("employeedetails");
        let collection = db.collection("comment");
        return(collection);
}