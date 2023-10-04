import {app} from'./app.js'
import { connectDB } from './data/database.js';


process.on("uncaughtException",(err)=>{
    console.log(`err : ${err.message}`);
    console.log("Shutting doem the server due to uncaught Exception ");
    process.exit(1);
})

// console.log(hello);

connectDB();

const port = process.env.PORT
const server = app.listen(port ,()=>{
    console.log(`Server is working on ${port} in ${process.env.node_env} mode`);
})

//unhandled Promise Rejection
process.on("unhandledRejection",(err)=>{
    console.log(`err : ${err.message}`);
    console.log("shutting down the server due to unhandled promise rejection");

    server.close(()=>{
        process.exit(1);
    })
})

