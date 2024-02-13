import {client} from "../Config.mjs";
export default async function EmployDetails(){
        await client.connect();
        let db=client.db("employeedetails");
        let collection = db.collection("employees");
        return(collection);
}