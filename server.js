const express=require("express")
const cors=require('cors')
const app=express()
const port=3000


app.use(cors())

app.get("/sum",(req,res)=>{
    let a=parseInt(req.query.a)
    let b=parseInt(req.query.b)

    sum=a+b

    

    res.status(200).json({
       "msg":sum
    })
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
