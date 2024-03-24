const express = require("express")
const app = express()
const PORT = 8024

app.get('/', (req,res)=>{
    res.json({
        message:'Hi Im nodejs in container'
    })

})

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})