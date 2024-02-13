import {client} from "../Config.mjs";
export default async function PostDetails(){
        await client.connect();
        let db=client.db("employeedetails");
        let collection = db.collection("post");
        return(collection);
}