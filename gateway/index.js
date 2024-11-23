

const express = require('express');
const app = express();
const AuthRouter = require('./Routes/AuthRouter');
const UserRouter = require('./Routes/UsersRouter');
const PostRouter = require('./Routes/PostRouter');


app.use(express.json());  // To parse JSON request body

//using .env variables //
require('dotenv').config();

//setting the backend to a port 5000 //
const   PORT = process.env.PORT || 5000;
//created a sample route to check the backend connection//
/*app.get('/test',(req,res)=>{
    res.send('hi bro ');
});
*/

// Use AuthRouter for /auth routes
app.use("/auth", AuthRouter);
// Use UserRouter for /user routes
app.use("/user", UserRouter);
// for Posts MS
app.use("/post", PostRouter);

// Start the Express server


app.listen(PORT,()=>{
    console.log('server ochindi dani port number ',PORT)
})