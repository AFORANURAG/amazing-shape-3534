require('dotenv').config()

const public_key='pk_test_51M2hnoSEx6YSbooflQv8mCzU7Ri8OLd41v1GO88fJorm5fszCjZAQA7Q3fw7vPXQv9MMKahukYm2zkYgrPTfQuGF00AS5yytVU'
const secret_key='sk_test_51M2hnoSEx6YSboofAInJTDPt5LiXponVuUGf7ZlyR06noY55Jo6SbewDscTXLd5u2H8YlYOHAFR8HAeDQd4riCuW00Em60onD6'

const express=require("express")
const app=express()
app.use(express.json())
const stripe= require('stripe')(secret_key)
app.use(express.static("public"))

const store=new Map([[1,{
price:10000,
name:"learn react today"

}],[2,{
price:20000,
name:"learn spring boot"

}]])


app.post('/create-checkout-session',(req,res)=>{
    res.json({url:"Hi"})
})

app.listen(9000)