const express = require('express')
const app = express()
require('express-async-errors');
const users = require('./routes/users')
const mongoose = require('mongoose')
require('dotenv').config() // importing dotenv package
const cors = require('cors') // for making api public
const errorHandlerMiddleware = require('./middleware/error-handler');
const bodyParser = require('body-parser')

// middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json()) // To get the req.body
app.use(cors())

// routes
app.use('/api/v1/users', users)

app.use(errorHandlerMiddleware);


// Starting the server
const port = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { // using dotenv variable
                useNewUrlParser: true,
               // useCreateIndex: true,
                useUnifiedTopology: true,
            })
            app.listen(port, () => {
            console.log(`Server is running on port: ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start()

