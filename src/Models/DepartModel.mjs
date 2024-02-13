import {client} from "../Config.mjs";
export default async function DepartDetails(){
        await client.connect();
        let db=client.db("employeedetails");
        let collection = db.collection("department");
        return(collection);
}