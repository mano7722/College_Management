import express from "express";
import path from "path";
import bodyParser from "body-parser";
import desigRoute from "./src/Routers/DesigRouter.mjs";
import employRoute from "./src/Routers/EmployRouter.mjs";
import departRoute from "./src/Routers/DepartRouter.mjs";
import commentRoute from "./src/Routers/CommentRouter.mjs";
import postRoute from "./src/Routers/PostRouter.mjs";

const app = express();
const __filename= new URL(import.meta.url).pathname;
const __dirname = path.join(__filename);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/desig',desigRoute);
app.use("/employ",employRoute);
app.use("/depart",departRoute);
app.use("/comment",commentRoute);
app.use("/post",postRoute);


// app.set('views',path.join(__dirname,'../src/views'));
app.set("view engine",'ejs');

// Define route to render the login page
app.get("/", (req, res) => {
    res.render("../src/views/Welcomepage");
});

// Start the server
const PORT = 4500;
app.listen(PORT, () => {
    // console.log(`Server is running on http://localhost:${PORT}`);
});
