const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

//Middleware for every response
app.use(express.json())
app.use(morgan("dev"))

//Connect To DB
mongoose.connect('mongodb://localhost:27017/bountydb',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log('Connected To The Database!')
)

//Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({ erMsg: err.message })
})

//routes
app.use("/bounties", require("./routes/bountyRouter.js"))
//app.use("/tvshows", require("./routes/tvshowRouter.js"))

// Server Listen
app.listen(9000, () => {
    console.log("The server is running on port 9000")
})
