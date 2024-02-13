import {client} from "../Config.mjs";
export default async function DesigDetails(){
        await client.connect();
        let db=client.db("employeedetails");
        let collection = db.collection("designation");
        return(collection);
}