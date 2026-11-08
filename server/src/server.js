import app from "./app/app.js";
import { ConnectToDB } from "./config/db.js";

await ConnectToDB();

app.listen(3000 , ()=>{
   console.log("Server is running on port 3000")
})